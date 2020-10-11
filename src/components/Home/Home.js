import React, { useEffect } from 'react';

import blob from '../../svg/blob.svg';
import wave from '../../svg/waveBrown.svg';
import wave2 from '../../svg/waveBrown2.svg';

import { useMediaQuery } from 'react-responsive';
import './Home.scss';
import { useTranslation } from 'react-i18next';
import { TimelineLite } from 'gsap';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  let tl = new TimelineLite();

  // useEffect(() => {
  //   tl.to('.homeContainer', 0.5, { opacity: '0' })
  //       .fromTo(
  //         '.Home',
  //         0.5,
  //         { left: '-100%', top: '50%' },
  //         { left: '0%' }
  //       )
  //       .fromTo(
  //         '.Home',
  //         0.5,
  //         { height: '2vh' },
  //         { height: '100vh', top: '0%' }
  //       )
  //       .to('.homeContainer', 0.5, { opacity: '1' });
  // }, [])

  const isLaptop = useMediaQuery({ query: '(min-height: 800px)' });
  let src;
  if (isLaptop) {
    src = wave;
  } else {
    src = wave2;
  }

  const history = useHistory();

  const redirectProjects = () => {
    history.push('/projects');
  }

  return (
    <div className="Home">
      <div className="homeContainer">
        <div className="blobBox">
          <img id="blob" src={blob} alt="blob"></img>
        </div>
        <div className="waveBox">
          <img id="wave" src={src} alt="wave"></img>
        </div>

        <div className="contentBox">
          <div className="leftContent">
            <h2>{t('Hello.1')}</h2>
            <svg
              id="logo"
              width="1039"
              height="153"
              viewBox="0 0 1039 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.936 113L32.032 71.96H16.192V113H3.08801V12.632H35.488C43.072 12.632 49.456 13.928 54.64 16.52C59.92 19.112 63.856 22.616 66.448 27.032C69.04 31.448 70.336 36.488 70.336 42.152C70.336 49.064 68.32 55.16 64.288 60.44C60.352 65.72 54.4 69.224 46.432 70.952L71.632 113H55.936ZM16.192 61.448H35.488C42.592 61.448 47.92 59.72 51.472 56.264C55.024 52.712 56.8 48.008 56.8 42.152C56.8 36.2 55.024 31.592 51.472 28.328C48.016 25.064 42.688 23.432 35.488 23.432H16.192V61.448Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M85.8014 73.256C85.8014 65.192 87.4334 58.136 90.6974 52.088C93.9614 45.944 98.4254 41.192 104.089 37.832C109.849 34.472 116.233 32.792 123.241 32.792C130.153 32.792 136.153 34.28 141.241 37.256C146.329 40.232 150.121 43.976 152.617 48.488V34.088H165.865V113H152.617V98.312C150.025 102.92 146.137 106.76 140.953 109.832C135.865 112.808 129.913 114.296 123.097 114.296C116.089 114.296 109.753 112.568 104.089 109.112C98.4254 105.656 93.9614 100.808 90.6974 94.568C87.4334 88.328 85.8014 81.224 85.8014 73.256ZM152.617 73.4C152.617 67.448 151.417 62.264 149.017 57.848C146.617 53.432 143.353 50.072 139.225 47.768C135.193 45.368 130.729 44.168 125.833 44.168C120.937 44.168 116.473 45.32 112.441 47.624C108.409 49.928 105.193 53.288 102.793 57.704C100.393 62.12 99.1934 67.304 99.1934 73.256C99.1934 79.304 100.393 84.584 102.793 89.096C105.193 93.512 108.409 96.92 112.441 99.32C116.473 101.624 120.937 102.776 125.833 102.776C130.729 102.776 135.193 101.624 139.225 99.32C143.353 96.92 146.617 93.512 149.017 89.096C151.417 84.584 152.617 79.352 152.617 73.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M220.122 44.888H203.562V113H190.458V44.888H180.234V34.088H190.458V28.472C190.458 19.64 192.714 13.208 197.226 9.17601C201.834 5.04801 209.178 2.98401 219.258 2.98401V13.928C213.498 13.928 209.418 15.08 207.018 17.384C204.714 19.592 203.562 23.288 203.562 28.472V34.088H220.122V44.888Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M230.505 73.256C230.505 65.192 232.137 58.136 235.401 52.088C238.665 45.944 243.129 41.192 248.793 37.832C254.553 34.472 260.936 32.792 267.944 32.792C274.856 32.792 280.857 34.28 285.945 37.256C291.033 40.232 294.824 43.976 297.32 48.488V34.088H310.569V113H297.32V98.312C294.728 102.92 290.84 106.76 285.656 109.832C280.568 112.808 274.617 114.296 267.801 114.296C260.793 114.296 254.457 112.568 248.793 109.112C243.129 105.656 238.665 100.808 235.401 94.568C232.137 88.328 230.505 81.224 230.505 73.256ZM297.32 73.4C297.32 67.448 296.12 62.264 293.72 57.848C291.32 53.432 288.056 50.072 283.928 47.768C279.896 45.368 275.432 44.168 270.536 44.168C265.64 44.168 261.177 45.32 257.145 47.624C253.113 49.928 249.897 53.288 247.497 57.704C245.097 62.12 243.897 67.304 243.897 73.256C243.897 79.304 245.097 84.584 247.497 89.096C249.897 93.512 253.113 96.92 257.145 99.32C261.177 101.624 265.64 102.776 270.536 102.776C275.432 102.776 279.896 101.624 283.928 99.32C288.056 96.92 291.32 93.512 293.72 89.096C296.12 84.584 297.32 79.352 297.32 73.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M356.473 55.4L346.249 59.432V113H333.145V64.472L322.921 68.504V58.136L333.145 54.248V6.44001H346.249V49.064L356.473 45.176V55.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M509.052 13.352V113H495.948V38.696L462.828 113H453.612L420.348 38.552V113H407.244V13.352H421.356L458.22 95.72L495.084 13.352H509.052Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M526.38 73.256C526.38 65.192 528.012 58.136 531.276 52.088C534.54 45.944 539.003 41.192 544.667 37.832C550.427 34.472 556.812 32.792 563.82 32.792C570.732 32.792 576.732 34.28 581.82 37.256C586.908 40.232 590.699 43.976 593.195 48.488V34.088H606.443V113H593.195V98.312C590.603 102.92 586.715 106.76 581.531 109.832C576.443 112.808 570.491 114.296 563.675 114.296C556.667 114.296 550.331 112.568 544.667 109.112C539.003 105.656 534.54 100.808 531.276 94.568C528.012 88.328 526.38 81.224 526.38 73.256ZM593.195 73.4C593.195 67.448 591.996 62.264 589.596 57.848C587.196 53.432 583.932 50.072 579.804 47.768C575.772 45.368 571.307 44.168 566.411 44.168C561.515 44.168 557.052 45.32 553.02 47.624C548.988 49.928 545.772 53.288 543.372 57.704C540.972 62.12 539.771 67.304 539.771 73.256C539.771 79.304 540.972 84.584 543.372 89.096C545.772 93.512 548.988 96.92 553.02 99.32C557.052 101.624 561.515 102.776 566.411 102.776C571.307 102.776 575.772 101.624 579.804 99.32C583.932 96.92 587.196 93.512 589.596 89.096C591.996 84.584 593.195 79.352 593.195 73.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M652.348 55.4L642.124 59.432V113H629.02V64.472L618.796 68.504V58.136L629.02 54.248V6.44001H642.124V49.064L652.348 45.176V55.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M732.697 34.088L685.177 150.152H671.641L687.193 112.136L655.369 34.088H669.913L694.681 98.024L719.161 34.088H732.697Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M773.805 114.296C767.757 114.296 762.333 113.288 757.533 111.272C752.733 109.16 748.941 106.28 746.157 102.632C743.373 98.888 741.837 94.616 741.549 89.816H755.085C755.469 93.752 757.293 96.968 760.557 99.464C763.917 101.96 768.285 103.208 773.661 103.208C778.653 103.208 782.589 102.104 785.469 99.896C788.349 97.688 789.789 94.904 789.789 91.544C789.789 88.088 788.253 85.544 785.181 83.912C782.109 82.184 777.357 80.504 770.925 78.872C765.069 77.336 760.269 75.8 756.525 74.264C752.877 72.632 749.709 70.28 747.021 67.208C744.429 64.04 743.133 59.912 743.133 54.824C743.133 50.792 744.333 47.096 746.733 43.736C749.133 40.376 752.541 37.736 756.957 35.816C761.373 33.8 766.413 32.792 772.077 32.792C780.813 32.792 787.869 35 793.245 39.416C798.621 43.832 801.501 49.88 801.885 57.56H788.781C788.493 53.432 786.813 50.12 783.741 47.624C780.765 45.128 776.733 43.88 771.645 43.88C766.941 43.88 763.197 44.888 760.413 46.904C757.629 48.92 756.237 51.56 756.237 54.824C756.237 57.416 757.053 59.576 758.685 61.304C760.413 62.936 762.525 64.28 765.021 65.336C767.613 66.296 771.165 67.4 775.677 68.648C781.341 70.184 785.949 71.72 789.501 73.256C793.053 74.696 796.077 76.904 798.573 79.88C801.165 82.856 802.509 86.744 802.605 91.544C802.605 95.864 801.405 99.752 799.005 103.208C796.605 106.664 793.197 109.4 788.781 111.416C784.461 113.336 779.469 114.296 773.805 114.296Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M830.896 102.2H869.632V113H815.92V102.2L854.224 44.744H816.208V34.088H869.344V44.744L830.896 102.2Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M930.699 113L899.739 78.152V113H886.635V6.44001H899.739V69.08L930.123 34.088H948.411L911.259 73.4L948.555 113H930.699Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M995.16 114.296C987.768 114.296 981.048 112.616 975 109.256C969.048 105.896 964.344 101.144 960.888 95C957.528 88.76 955.848 81.56 955.848 73.4C955.848 65.336 957.576 58.232 961.032 52.088C964.584 45.848 969.384 41.096 975.432 37.832C981.48 34.472 988.248 32.792 995.736 32.792C1003.22 32.792 1009.99 34.472 1016.04 37.832C1022.09 41.096 1026.84 45.8 1030.3 51.944C1033.85 58.088 1035.62 65.24 1035.62 73.4C1035.62 81.56 1033.8 88.76 1030.15 95C1026.6 101.144 1021.75 105.896 1015.61 109.256C1009.46 112.616 1002.65 114.296 995.16 114.296ZM995.16 102.776C999.864 102.776 1004.28 101.672 1008.41 99.464C1012.54 97.256 1015.85 93.944 1018.34 89.528C1020.94 85.112 1022.23 79.736 1022.23 73.4C1022.23 67.064 1020.98 61.688 1018.49 57.272C1015.99 52.856 1012.73 49.592 1008.7 47.48C1004.66 45.272 1000.3 44.168 995.592 44.168C990.792 44.168 986.376 45.272 982.344 47.48C978.408 49.592 975.24 52.856 972.84 57.272C970.44 61.688 969.24 67.064 969.24 73.4C969.24 79.832 970.392 85.256 972.696 89.672C975.096 94.088 978.264 97.4 982.2 99.608C986.136 101.72 990.456 102.776 995.16 102.776Z"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
            <h3>Front End Developer</h3>
            <button className="btnContent" onClick={redirectProjects}>{t('View.1')}</button>
          </div>
          <div className="rightContent">
            <svg
              width="1083"
              height="450"
              viewBox="0 0 1083 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="code_thinking" clipPath="url(#clip0)">
                <g id="man-thinking">
                  <path
                    id="Vector"
                    d="M77.591 390.495L52.772 388.84L61.045 426.069L89.173 414.487L77.591 390.495Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_2"
                    d="M305.1 321.001L247.189 264.744L214.096 290.391L148.739 368.985L156.185 380.567L235.606 326.792L289.381 397.113L340.674 371.467L305.1 321.001Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_3"
                    opacity="0.1"
                    d="M305.1 321.001L247.189 264.744L214.096 290.391L148.739 368.985L156.185 380.567L235.606 326.792L289.381 397.113L340.674 371.467L305.1 321.001Z"
                    fill="black"
                  />
                  <path
                    id="Vector_4"
                    d="M310.064 358.23L302.618 364.021L242.225 343.338L228.161 337.547L200.032 343.338C200.032 343.338 200.032 320.174 226.506 321.001L253.807 327.62L286.072 330.101L310.064 358.23Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_5"
                    d="M363.839 419.451L345.638 431.033H324.128L224.024 393.804L77.591 420.278L73.454 388.84L207.478 330.102L324.956 368.985L363.839 419.451Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_6"
                    d="M246.361 272.19L233.952 274.672L231.248 271.517C229.107 269.019 227.75 265.946 227.348 262.681C226.946 259.415 227.517 256.104 228.988 253.162V253.162L263.735 207.66C263.735 207.66 273.663 185.323 289.381 194.423C305.1 203.524 276.144 218.415 276.144 218.415L258.771 245.716L260.426 259.781L246.361 272.19Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_7"
                    d="M324.956 218.415C342.775 218.415 357.22 203.97 357.22 186.15C357.22 168.331 342.775 153.885 324.956 153.885C307.136 153.885 292.691 168.331 292.691 186.15C292.691 203.97 307.136 218.415 324.956 218.415Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_8"
                    d="M310.478 209.728L325.369 245.303L360.943 230.411C360.943 230.411 349.361 202.283 349.361 201.455C349.361 200.628 310.478 209.728 310.478 209.728Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_9"
                    d="M408.439 314.97C408.439 334.442 405.37 353.793 399.347 372.311L396.931 379.74L385.349 432.688L372.939 435.997L363.839 424.414L345.638 411.178L332.401 389.668L321.051 370.755L317.51 364.848L305.1 302.8L257.944 276.327L242.225 273.845L245.534 264.744L259.598 245.716L273.663 244.062L277.799 240.752L281.108 242.407L294.345 234.961L298.482 236.616L322.672 238.866L337.365 235.789L358.495 224.446L367.148 225.861L396.931 250.68C404.545 271.259 408.441 293.028 408.439 314.97V314.97Z"
                    fill="#575A89"
                  />
                  <path
                    id="Vector_10"
                    opacity="0.1"
                    d="M399.413 307.764L367.975 328.447L321.051 370.755L317.51 364.848L307.582 315.21H310.064L335.711 268.054L399.413 307.764Z"
                    fill="black"
                  />
                  <path
                    id="Vector_11"
                    d="M335.711 263.09L310.064 310.246H300.964L295.173 326.792L281.936 330.102L317.51 368.985L367.975 323.483L399.413 302.8L335.711 263.09Z"
                    fill="#575A89"
                  />
                  <path
                    id="Vector_12"
                    d="M299.86 162.16L296.364 163.505C295.826 163.141 295.367 162.673 295.012 162.129C294.658 161.585 294.415 160.976 294.299 160.337C294.183 159.698 294.195 159.042 294.336 158.408C294.476 157.774 294.741 157.175 295.117 156.645L288.656 156.342C292.803 150.819 298.076 146.24 304.125 142.907C310.175 139.574 316.863 137.563 323.747 137.008C330.632 136.453 337.555 137.367 344.06 139.688C350.565 142.009 356.503 145.685 361.482 150.473C361.776 149.46 364.982 151.43 366.291 153.429C366.731 151.78 369.737 159.749 370.8 165.381C371.293 163.506 373.185 166.533 371.527 169.439C372.578 169.285 373.052 171.973 372.239 173.471C373.388 172.931 373.195 176.14 371.948 178.284C373.589 178.138 359.013 200.76 353.112 213.98C351.398 206.107 349.471 197.816 343.946 191.951C343.007 190.954 341.978 190.046 340.951 189.14L335.398 184.237C328.94 178.537 323.065 171.501 314.462 169.371C308.55 167.907 304.812 167.576 308.034 160.914C305.123 162.129 302.404 163.935 299.467 165.064C299.507 164.133 299.917 163.091 299.86 162.16Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_13"
                    d="M341.088 195.664C344.286 195.664 346.879 193.071 346.879 189.873C346.879 186.675 344.286 184.082 341.088 184.082C337.89 184.082 335.297 186.675 335.297 189.873C335.297 193.071 337.89 195.664 341.088 195.664Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_14"
                    d="M1026.23 5.36232H766.062V0H648.091V5.36232H386.849C384.538 5.36232 382.25 5.81751 380.114 6.70192C377.979 7.58633 376.039 8.88263 374.405 10.5168C372.771 12.151 371.475 14.091 370.59 16.2262C369.706 18.3613 369.251 20.6497 369.251 22.9608V379.213C369.251 381.524 369.706 383.813 370.59 385.948C371.475 388.083 372.771 390.023 374.405 391.657C376.039 393.291 377.979 394.588 380.114 395.472C382.25 396.356 384.538 396.812 386.849 396.812H1026.23C1030.9 396.812 1035.38 394.957 1038.68 391.657C1041.98 388.357 1043.83 383.88 1043.83 379.213V22.9608C1043.83 20.6497 1043.38 18.3613 1042.49 16.2262C1041.61 14.091 1040.31 12.151 1038.68 10.5168C1037.04 8.88263 1035.1 7.58633 1032.97 6.70192C1030.83 5.81751 1028.54 5.36232 1026.23 5.36232V5.36232Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_15"
                    d="M1020.24 36.4637H392.845V390.377H1020.24V36.4637Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_16"
                    d="M706.004 26.8116C709.558 26.8116 712.439 23.9306 712.439 20.3768C712.439 16.823 709.558 13.942 706.004 13.942C702.45 13.942 699.569 16.823 699.569 20.3768C699.569 23.9306 702.45 26.8116 706.004 26.8116Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_17"
                    opacity="0.1"
                    d="M840.813 390.377H392.845V36.464L840.813 390.377Z"
                    fill="black"
                  />
                  <path
                    id="Vector_18"
                    d="M910.997 227.332H852.392V239.578H910.997V227.332Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_19"
                    d="M981.848 131.989H781.541V137.237H981.848V131.989Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_20"
                    d="M981.848 148.609H781.541V153.857H981.848V148.609Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_21"
                    d="M981.848 165.228H781.541V170.476H981.848V165.228Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_22"
                    d="M981.848 181.847H781.541V187.096H981.848V181.847Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_23"
                    d="M981.848 198.467H781.541V203.715H981.848V198.467Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_24"
                    d="M1061.45 383.942H1000.22V379.53C1000.22 379.416 1000.19 379.302 1000.15 379.196C1000.11 379.09 1000.04 378.993 999.961 378.912C999.879 378.831 999.783 378.766 999.677 378.722C999.571 378.678 999.457 378.656 999.342 378.656H978.349C978.234 378.656 978.121 378.678 978.014 378.722C977.908 378.766 977.812 378.831 977.731 378.912C977.649 378.993 977.585 379.09 977.541 379.196C977.497 379.302 977.475 379.416 977.475 379.53V383.942H964.354V379.53C964.354 379.416 964.331 379.302 964.287 379.196C964.243 379.09 964.179 378.993 964.098 378.912C964.016 378.831 963.92 378.766 963.814 378.722C963.708 378.678 963.594 378.656 963.479 378.656H942.486C942.371 378.656 942.258 378.678 942.152 378.722C942.045 378.766 941.949 378.831 941.868 378.912C941.787 378.993 941.722 379.09 941.678 379.196C941.634 379.302 941.612 379.416 941.612 379.53V383.942H928.491V379.53C928.491 379.416 928.468 379.302 928.424 379.196C928.381 379.09 928.316 378.993 928.235 378.912C928.154 378.831 928.057 378.766 927.951 378.722C927.845 378.678 927.731 378.656 927.616 378.656H906.623C906.508 378.656 906.395 378.678 906.289 378.722C906.183 378.766 906.086 378.831 906.005 378.912C905.924 378.993 905.859 379.09 905.815 379.196C905.771 379.302 905.749 379.416 905.749 379.53V383.942H892.628V379.53C892.628 379.416 892.606 379.302 892.562 379.196C892.518 379.09 892.453 378.993 892.372 378.912C892.291 378.831 892.194 378.766 892.088 378.722C891.982 378.678 891.868 378.656 891.753 378.656H870.761C870.646 378.656 870.532 378.678 870.426 378.722C870.32 378.766 870.223 378.831 870.142 378.912C870.061 378.993 869.996 379.09 869.952 379.196C869.908 379.302 869.886 379.416 869.886 379.53V383.942H856.765V379.53C856.765 379.416 856.743 379.302 856.699 379.196C856.655 379.09 856.59 378.993 856.509 378.912C856.428 378.831 856.331 378.766 856.225 378.722C856.119 378.678 856.005 378.656 855.891 378.656H834.898C834.783 378.656 834.669 378.678 834.563 378.722C834.457 378.766 834.36 378.831 834.279 378.912C834.198 378.993 834.133 379.09 834.09 379.196C834.046 379.302 834.023 379.416 834.023 379.53V383.942H820.902V379.53C820.902 379.416 820.88 379.302 820.836 379.196C820.792 379.09 820.727 378.993 820.646 378.912C820.565 378.831 820.469 378.766 820.362 378.722C820.256 378.678 820.143 378.656 820.028 378.656H799.035C798.92 378.656 798.806 378.678 798.7 378.722C798.594 378.766 798.497 378.831 798.416 378.912C798.335 378.993 798.271 379.09 798.227 379.196C798.183 379.302 798.16 379.416 798.16 379.53V383.942H785.04V379.53C785.04 379.416 785.017 379.302 784.973 379.196C784.929 379.09 784.865 378.993 784.783 378.912C784.702 378.831 784.606 378.766 784.5 378.722C784.393 378.678 784.28 378.656 784.165 378.656H619.72C619.605 378.656 619.492 378.678 619.386 378.722C619.279 378.766 619.183 378.831 619.102 378.912C619.021 378.993 618.956 379.09 618.912 379.196C618.868 379.302 618.846 379.416 618.846 379.53V383.942H605.725V379.53C605.725 379.416 605.702 379.302 605.658 379.196C605.615 379.09 605.55 378.993 605.469 378.912C605.388 378.831 605.291 378.766 605.185 378.722C605.079 378.678 604.965 378.656 604.85 378.656H583.858C583.743 378.656 583.629 378.678 583.523 378.722C583.417 378.766 583.32 378.831 583.239 378.912C583.158 378.993 583.093 379.09 583.049 379.196C583.005 379.302 582.983 379.416 582.983 379.53V383.942H569.862V379.53C569.862 379.416 569.84 379.302 569.796 379.196C569.752 379.09 569.687 378.993 569.606 378.912C569.525 378.831 569.428 378.766 569.322 378.722C569.216 378.678 569.102 378.656 568.987 378.656H547.995C547.88 378.656 547.766 378.678 547.66 378.722C547.554 378.766 547.457 378.831 547.376 378.912C547.295 378.993 547.23 379.09 547.186 379.196C547.142 379.302 547.12 379.416 547.12 379.53V383.942H533.999V379.53C533.999 379.416 533.977 379.302 533.933 379.196C533.889 379.09 533.824 378.993 533.743 378.912C533.662 378.831 533.565 378.766 533.459 378.722C533.353 378.678 533.239 378.656 533.125 378.656H512.132C512.017 378.656 511.903 378.678 511.797 378.722C511.691 378.766 511.594 378.831 511.513 378.912C511.432 378.993 511.368 379.09 511.324 379.196C511.28 379.302 511.257 379.416 511.257 379.53V383.942H498.136V379.53C498.136 379.416 498.114 379.302 498.07 379.196C498.026 379.09 497.961 378.993 497.88 378.912C497.799 378.831 497.703 378.766 497.596 378.722C497.49 378.678 497.377 378.656 497.262 378.656H476.269C476.154 378.656 476.04 378.678 475.934 378.722C475.828 378.766 475.732 378.831 475.65 378.912C475.569 378.993 475.505 379.09 475.461 379.196C475.417 379.302 475.394 379.416 475.394 379.53V383.942H462.274V379.53C462.274 379.416 462.251 379.302 462.207 379.196C462.163 379.09 462.099 378.993 462.017 378.912C461.936 378.831 461.84 378.766 461.734 378.722C461.627 378.678 461.514 378.656 461.399 378.656H440.406C440.291 378.656 440.177 378.678 440.071 378.722C439.965 378.766 439.869 378.831 439.787 378.912C439.706 378.993 439.642 379.09 439.598 379.196C439.554 379.302 439.531 379.416 439.531 379.53V383.942H426.411V379.53C426.411 379.416 426.388 379.302 426.344 379.196C426.3 379.09 426.236 378.993 426.154 378.912C426.073 378.831 425.977 378.766 425.871 378.722C425.765 378.678 425.651 378.656 425.536 378.656H404.543C404.428 378.656 404.314 378.678 404.208 378.722C404.102 378.766 404.006 378.831 403.925 378.912C403.843 378.993 403.779 379.09 403.735 379.196C403.691 379.302 403.668 379.416 403.668 379.53V383.942H363.432C357.864 383.942 352.525 386.154 348.588 390.091C344.651 394.028 342.439 399.367 342.439 404.935V414.427C342.439 419.995 344.651 425.335 348.588 429.272C352.525 433.209 357.864 435.42 363.432 435.42H1061.45C1067.01 435.42 1072.35 433.209 1076.29 429.272C1080.23 425.335 1082.44 419.995 1082.44 414.427V404.935C1082.44 399.367 1080.23 394.028 1076.29 390.091C1072.35 386.154 1067.01 383.942 1061.45 383.942V383.942Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="boxes">
                  <path
                    id="Vector_25"
                    d="M981.848 43.6439H957.356V68.1357H981.848V43.6439Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_26"
                    d="M993.219 79.5069H963.479V49.7668H993.219V79.5069ZM964.772 78.2139H991.926V51.0599H964.772V78.2139Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="shoe">
                  <path
                    id="Vector_27"
                    d="M60.3902 403.305C60.3902 403.305 67.8002 390.747 64.6704 389.28C61.5406 387.814 48.2488 381.969 48.2488 381.969L28.7567 375.509C28.7567 375.509 0.63066 333.708 0.0132905 370.059C-0.60408 406.41 20.4925 415.148 20.4925 415.148C20.4925 415.148 39.308 455.641 49.9662 449.184C60.6244 442.727 71.2895 420.808 71.2895 420.808C71.2895 420.808 52.0695 410.476 60.3902 403.305Z"
                    fill="#2F2E41"
                  />
                </g>
                <g id="rect2">
                  <path
                    id="Vector_28"
                    d="M206.439 59.7101H178.439V87.7101H206.439V59.7101Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_29"
                    d="M223.439 71.7101H189.439V37.7101H223.439V71.7101ZM190.917 70.2319H221.961V39.1884H190.917V70.2319Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="rect3">
                  <path
                    id="Vector_30"
                    d="M81.3339 173.175L73.6457 146.251L46.7219 153.939L54.4101 180.863L81.3339 173.175Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_31"
                    d="M74.4629 192.817L65.1273 160.123L97.8205 150.788L107.156 183.481L74.4629 192.817ZM66.9546 161.139L75.4785 190.989L105.329 182.465L96.8049 152.615L66.9546 161.139Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="rect1">
                  <path
                    id="Vector_32"
                    d="M74.3754 47.7768L93.4938 27.3199L73.0369 8.20149L53.9185 28.6584L74.3754 47.7768Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_33"
                    d="M54.0006 52.0036L77.2158 27.163L102.056 50.3782L78.8412 75.2188L54.0006 52.0036ZM77.2864 29.2524L56.09 51.933L78.7705 73.1294L99.967 50.4488L77.2864 29.2524Z"
                    fill="#3F3D56"
                  />
                </g>
                <g id="circle">
                  <path
                    id="Vector_34"
                    d="M491.013 363.893C524.319 363.893 551.32 336.893 551.32 303.587C551.32 270.28 524.319 243.28 491.013 243.28C457.706 243.28 430.706 270.28 430.706 303.587C430.706 336.893 457.706 363.893 491.013 363.893Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_35"
                    d="M504.438 348.913C489.601 348.913 475.097 344.513 462.761 336.271C450.425 328.028 440.81 316.312 435.132 302.604C429.454 288.897 427.969 273.814 430.863 259.262C433.758 244.711 440.902 231.344 451.394 220.853C461.885 210.362 475.251 203.217 489.803 200.323C504.355 197.428 519.438 198.914 533.145 204.592C546.852 210.269 558.568 219.884 566.811 232.221C575.054 244.557 579.454 259.06 579.454 273.897C579.431 293.786 571.52 312.853 557.457 326.916C543.394 340.98 524.326 348.89 504.438 348.913ZM504.438 199.862C489.795 199.862 475.481 204.204 463.306 212.339C451.131 220.474 441.642 232.037 436.038 245.565C430.435 259.093 428.968 273.979 431.825 288.341C434.682 302.702 441.733 315.894 452.087 326.248C462.441 336.602 475.633 343.653 489.994 346.51C504.356 349.366 519.242 347.9 532.77 342.297C546.298 336.693 557.861 327.204 565.996 315.029C574.131 302.854 578.473 288.54 578.473 273.897C578.451 254.269 570.643 235.45 556.764 221.571C542.885 207.691 524.066 199.884 504.438 199.862V199.862Z"
                    fill="#3F3D56"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="1082.44" height="449.881" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
