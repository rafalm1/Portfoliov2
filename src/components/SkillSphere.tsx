import { useEffect, useMemo, useRef, type PointerEvent as ReactPointerEvent } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

type SkillPoint = {
  skill: string;
  position: [number, number, number];
  quaternion: [number, number, number, number];
  important: boolean;
};

type SkillSphereProps = {
  skills: string[];
  prioritySkills: Set<string>;
};

const RADIUS = 2.6;
const CAMERA_FOV = 45;
const CAMERA_DISTANCE = 6.2;
// Room for the labels sticking out past the sphere's edge when fitting it into narrow (mobile) canvases.
const LABEL_MARGIN = 0.4;
const PANEL_COLOR = '#201f1e';
const ACCENT_LIGHT = '#dec79b';
const MUTED = '#b8b0a2';

const dummy = new THREE.Object3D();

function buildPoints(skills: string[], prioritySkills: Set<string>): SkillPoint[] {
  return skills.map((skill, index) => {
    const angle = index * Math.PI * (3 - Math.sqrt(5));
    const y = 1 - (index / Math.max(skills.length - 1, 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const x = Math.cos(angle) * r;
    const z = Math.sin(angle) * r;
    const position: [number, number, number] = [x * RADIUS, y * RADIUS, z * RADIUS];

    dummy.position.set(...position);
    dummy.lookAt(x * RADIUS * 2, y * RADIUS * 2, z * RADIUS * 2);
    const quaternion = dummy.quaternion.toArray() as [number, number, number, number];

    return { skill, position, quaternion, important: prioritySkills.has(skill) };
  });
}

function Scene({
  points,
  rotationRef,
  dragRef,
  reduceMotion,
}: {
  points: SkillPoint[];
  rotationRef: React.RefObject<{ x: number; y: number }>;
  dragRef: React.RefObject<{ active: boolean }>;
  reduceMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, size } = useThree();
  // The FOV is vertical, so on portrait canvases the camera backs off until the sphere fits horizontally.
  const halfFovTan = Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2));
  const distance = Math.max(CAMERA_DISTANCE, (RADIUS + LABEL_MARGIN) / (halfFovTan * (size.width / size.height)));

  useEffect(() => {
    camera.position.z = distance;
  }, [camera, distance]);

  useFrame((_, delta) => {
    if (!dragRef.current?.active && !reduceMotion && rotationRef.current) {
      rotationRef.current.y += delta * 0.12;
    }
    const group = groupRef.current;
    if (group && rotationRef.current) {
      group.rotation.x = rotationRef.current.x;
      group.rotation.y = rotationRef.current.y;
    }
  });

  return (
    <>
      <fog attach="fog" args={[PANEL_COLOR, distance - 2, distance + 2.4]} />
      <group ref={groupRef}>
        {points.map(({ skill, position, quaternion, important }) => (
          <Text
            key={skill}
            position={position}
            quaternion={quaternion}
            fontSize={important ? 0.34 : 0.24}
            letterSpacing={important ? 0.02 : 0}
            color={important ? ACCENT_LIGHT : MUTED}
            fillOpacity={important ? 1 : 0.75}
            outlineWidth={important ? 0.008 : 0}
            outlineColor={ACCENT_LIGHT}
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        ))}
      </group>
    </>
  );
}

export default function SkillSphere({ skills, prioritySkills }: SkillSphereProps) {
  const points = useMemo(() => buildPoints(skills, prioritySkills), [skills, prioritySkills]);
  const rotationRef = useRef({ x: -0.14, y: -0.32 });
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const reduceMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { active: true, x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const deltaX = event.clientX - dragRef.current.x;
    const deltaY = event.clientY - dragRef.current.y;
    dragRef.current.x = event.clientX;
    dragRef.current.y = event.clientY;

    rotationRef.current.y += deltaX * 0.006;
    rotationRef.current.x = THREE.MathUtils.clamp(rotationRef.current.x + deltaY * 0.006, -1.2, 1.2);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current.active = false;
  };

  return (
    <div
      className="skill-cloud-canvas"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, CAMERA_DISTANCE], fov: CAMERA_FOV }}>
        <Scene points={points} rotationRef={rotationRef} dragRef={dragRef} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
