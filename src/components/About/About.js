import React, { useEffect } from 'react';

import './About.scss';
import blob2 from '../../svg/blob2.svg';
import wave from '../../svg/waveBrown.svg';
import wave2 from '../../svg/waveBrown2.svg';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  useEffect(() => {}, []);

  const isLaptop = useMediaQuery({ query: '(min-height: 800px)' });
  let src;
  if (isLaptop) {
    src = wave;
  } else {
    src = wave2;
  }

  return (
    <div className="About">
      <div className="aboutContainer">
        <div className="blobBox">
          <img id="blob" src={blob2} alt="blob"></img>
        </div>
        <div className="waveBox">
          <img id="wave" src={src} alt="wave"></img>
        </div>

        <div className="contentBox">
          <div className="rightContent">
            {/* <img id="about" src={about} alt="about"></img> */}
            <svg
              id="about"
              width="1032"
              height="742"
              viewBox="0 0 1032 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="about" clipPath="url(#clip0)">
                <g id="content">
                  <path
                    id="Vector"
                    d="M10 741.253H176"
                    stroke="#343334"
                    strokeWidth="10"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_2"
                    d="M970.602 127.753H272.398C261.685 127.753 253 136.437 253 147.15V607.355C253 618.068 261.685 626.753 272.398 626.753H970.602C981.315 626.753 990 618.068 990 607.355V147.15C990 136.437 981.315 127.753 970.602 127.753Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_3"
                    d="M948.102 96.2528H249.898C239.185 96.2528 230.5 104.937 230.5 115.65V575.855C230.5 586.568 239.185 595.253 249.898 595.253H948.102C958.815 595.253 967.5 586.568 967.5 575.855V115.65C967.5 104.937 958.815 96.2528 948.102 96.2528Z"
                    stroke="#343334"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_4"
                    d="M230.5 144.093H967.5"
                    stroke="#3F3D56"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_5"
                    opacity="0.3"
                    d="M864.907 256.253H678.093C674.175 256.253 671 259.428 671 263.345V280.16C671 284.077 674.175 287.253 678.093 287.253H864.907C868.825 287.253 872 284.077 872 280.16V263.345C872 259.428 868.825 256.253 864.907 256.253Z"
                    fill="#DEC79B"
                    stroke="#3F3D56"
                    strokeWidth="2"
                  />
                  <path
                    id="Vector_6"
                    opacity="0.3"
                    d="M903.407 342.253H639.593C635.675 342.253 632.5 345.428 632.5 349.345V360.16C632.5 364.077 635.675 367.253 639.593 367.253H903.407C907.325 367.253 910.5 364.077 910.5 360.16V349.345C910.5 345.428 907.325 342.253 903.407 342.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_7"
                    opacity="0.3"
                    d="M903.407 410.253H639.593C635.675 410.253 632.5 413.428 632.5 417.345V428.16C632.5 432.077 635.675 435.253 639.593 435.253H903.407C907.325 435.253 910.5 432.077 910.5 428.16V417.345C910.5 413.428 907.325 410.253 903.407 410.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_8"
                    opacity="0.3"
                    d="M903.407 478.253H639.593C635.675 478.253 632.5 481.428 632.5 485.345V496.16C632.5 500.077 635.675 503.253 639.593 503.253H903.407C907.325 503.253 910.5 500.077 910.5 496.16V485.345C910.5 481.428 907.325 478.253 903.407 478.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_9"
                    d="M913.407 332.253H649.593C645.675 332.253 642.5 335.428 642.5 339.345V350.16C642.5 354.077 645.675 357.253 649.593 357.253H913.407C917.325 357.253 920.5 354.077 920.5 350.16V339.345C920.5 335.428 917.325 332.253 913.407 332.253Z"
                    stroke="#3F3D56"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_10"
                    d="M913.407 400.253H649.593C645.675 400.253 642.5 403.428 642.5 407.345V418.16C642.5 422.077 645.675 425.253 649.593 425.253H913.407C917.325 425.253 920.5 422.077 920.5 418.16V407.345C920.5 403.428 917.325 400.253 913.407 400.253Z"
                    stroke="#3F3D56"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_11"
                    d="M913.407 468.253H649.593C645.675 468.253 642.5 471.428 642.5 475.345V486.16C642.5 490.077 645.675 493.253 649.593 493.253H913.407C917.325 493.253 920.5 490.077 920.5 486.16V475.345C920.5 471.428 917.325 468.253 913.407 468.253Z"
                    stroke="#3F3D56"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_12"
                    opacity="0.3"
                    d="M286.5 141.253C294.784 141.253 301.5 134.537 301.5 126.253C301.5 117.969 294.784 111.253 286.5 111.253C278.216 111.253 271.5 117.969 271.5 126.253C271.5 134.537 278.216 141.253 286.5 141.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_13"
                    opacity="0.3"
                    d="M328.5 141.253C336.784 141.253 343.5 134.537 343.5 126.253C343.5 117.969 336.784 111.253 328.5 111.253C320.216 111.253 313.5 117.969 313.5 126.253C313.5 134.537 320.216 141.253 328.5 141.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_14"
                    opacity="0.3"
                    d="M370.5 141.253C378.784 141.253 385.5 134.537 385.5 126.253C385.5 117.969 378.784 111.253 370.5 111.253C362.216 111.253 355.5 117.969 355.5 126.253C355.5 134.537 362.216 141.253 370.5 141.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_15"
                    d="M531.728 192.253H301.272C288.143 192.253 277.5 202.896 277.5 216.024V523.481C277.5 536.61 288.143 547.253 301.272 547.253H531.728C544.857 547.253 555.5 536.61 555.5 523.481V216.024C555.5 202.896 544.857 192.253 531.728 192.253Z"
                    stroke="#3F3D56"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    id="Vector_16"
                    d="M110.824 321.631C110.824 321.631 101.5 318.874 99.5 321.874C97.5 324.874 102.227 346.621 102.227 346.621L122.773 347.87L115.602 329.763L110.824 321.631Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_17"
                    d="M38.9441 500.221C38.9441 500.221 57.6388 541.263 43.2418 539.974C28.8447 538.684 23.2578 500.221 23.2578 500.221H38.9441Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_18"
                    d="M161.211 495.945C161.211 495.945 153.01 540.292 166.667 535.556C180.323 530.819 176.431 492.147 176.431 492.147L161.211 495.945Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_19"
                    d="M106.847 311.34C106.847 311.34 106.632 331.969 114.582 333.043C122.533 334.117 110.07 345.076 110.07 345.076L95.8877 347.87L75.474 346.366L66.449 334.762C66.449 334.762 82.3502 327.241 75.474 303.819L106.847 311.34Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_20"
                    opacity="0.1"
                    d="M106.847 311.34C106.847 311.34 106.632 331.969 114.582 333.043C122.533 334.117 110.07 345.076 110.07 345.076L95.8877 347.87L75.474 346.366L66.449 334.762C66.449 334.762 82.3502 327.241 75.474 303.819L106.847 311.34Z"
                    fill="black"
                  />
                  <path
                    id="Vector_21"
                    d="M143.376 485.824C143.376 485.824 153.476 507.527 145.525 575.644C145.525 575.644 147.889 599.711 145.955 604.223C144.021 608.736 128.12 669.977 128.12 669.977C128.12 669.977 107.706 674.489 104.913 660.952C104.913 660.952 107.706 641.613 107.491 638.604C107.276 635.596 112.004 602.719 112.004 602.719L102.334 539.114L95.0281 596.487C95.0281 596.487 95.0281 613.033 92.6644 616.686C90.3007 620.339 92.6644 693.829 92.6644 693.829C92.6644 693.829 99.3257 705.003 89.2263 705.217C79.1269 705.432 70.1019 705.003 69.2423 697.911C68.3828 690.82 67.953 683.729 65.8042 679.432C63.6554 675.134 60.862 625.926 61.5066 608.736C62.1513 591.545 47.3244 503.229 52.0518 493.989C56.7792 484.749 143.376 485.824 143.376 485.824Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_22"
                    d="M95.8877 319.076C110.129 319.076 121.673 307.531 121.673 293.29C121.673 279.049 110.129 267.504 95.8877 267.504C81.6466 267.504 70.1019 279.049 70.1019 293.29C70.1019 307.531 81.6466 319.076 95.8877 319.076Z"
                    fill="#FFB9B9"
                  />
                  <path
                    id="Vector_23"
                    d="M70.1019 335.192C70.1019 335.192 85.7883 346.795 108.566 337.556C108.566 337.556 116.087 333.903 115.442 328.316C114.797 322.729 131.128 373.226 131.128 373.226L147.674 461.112L146.815 496.997C146.815 496.997 139.509 493.344 116.731 501.51C93.9538 509.675 56.7793 492.27 56.7793 492.27L58.0686 400.086L59.3579 346.366L62.796 334.547C62.796 334.547 64.515 331.324 70.1019 335.192Z"
                    fill="#F2F2F2"
                  />
                  <path
                    id="Vector_24"
                    d="M107.563 320.767C107.563 320.767 111.359 320.15 115.012 325.952C118.665 331.754 127.26 335.407 127.26 335.407C127.26 335.407 148.104 336.696 151.112 347.87C154.121 359.044 161.641 374.3 165.294 402.45C168.947 430.599 176.253 475.509 177.328 479.162C178.402 482.815 175.824 493.989 178.832 497.427C181.84 500.865 157.559 500.865 157.559 500.865C157.559 500.865 155.41 483.245 153.906 483.245C152.401 483.245 152.831 495.064 154.335 503.659C155.84 512.254 143.376 503.659 143.376 503.659C143.376 503.659 133.707 464.336 124.467 428.88C115.227 393.425 109.855 373.87 111.574 365.92C113.293 357.969 118.02 335.192 114.582 333.043C111.144 330.894 107.563 320.767 107.563 320.767Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_25"
                    d="M76.5755 320.748C76.5755 320.748 70.9615 323.803 56.7793 333.903C42.5971 344.002 32.9275 351.738 32.9275 351.738C32.9275 351.738 27.3406 356.035 23.9025 381.606C20.4644 407.177 12.7286 473.361 15.737 481.741C18.7453 490.121 19.8197 495.064 18.7453 500.006C17.6709 504.948 41.3079 504.733 41.7376 503.659C42.1674 502.584 41.093 483.03 42.1674 482.6C43.2418 482.171 49.0436 494.204 50.118 504.303C51.1924 514.403 63.6555 522.353 66.449 522.353C69.2425 522.353 83.6395 464.121 83.8544 424.368C84.0693 384.615 79.127 351.093 75.474 346.366C71.821 341.638 76.5755 320.748 76.5755 320.748Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_26"
                    d="M114.367 671.911C114.367 671.911 116.087 667.183 122.103 668.688C128.12 670.192 132.203 664.82 132.203 664.82C132.203 664.82 135.426 664.39 133.277 668.473C131.128 672.555 129.409 675.349 129.409 675.349C129.409 675.349 142.302 704.788 133.922 711.879C125.541 718.97 115.872 714.672 115.872 714.672C115.872 714.672 106.417 708.011 106.847 690.391C106.847 690.391 106.417 684.804 101.26 675.779C96.1026 666.754 92.2348 653.001 98.4663 650.423C104.698 647.844 106.302 647.748 106.302 647.748C106.302 647.748 103.386 661.086 110.918 665.746L114.367 671.911Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_27"
                    d="M74.3996 705.217C74.3996 705.217 69.2424 695.548 77.8377 694.473C86.4329 693.399 95.6728 692.754 95.2431 697.267C94.8133 701.779 93.7389 708.656 93.7389 708.656L95.2431 713.598C95.2431 713.598 95.6728 725.846 97.177 727.35C98.6811 728.854 106.847 741.747 89.4413 741.747C72.0359 741.747 66.8787 739.813 68.3829 735.73C69.8871 731.648 70.3168 711.449 70.3168 711.449L74.3996 705.217Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_28"
                    d="M87.7222 272.661C87.7222 272.661 99.7556 275.885 105.987 277.174C112.219 278.463 111.574 274.81 111.574 274.81C111.574 274.81 119.74 275.885 119.31 275.025C118.88 274.166 122.748 269.653 118.235 264.496C113.723 259.339 115.012 255.471 115.012 255.471H111.144L110.07 253.967H104.053C104.053 253.967 99.5407 252.248 87.7222 253.967C75.9037 255.686 59.7876 256.116 58.4983 263.207C57.2091 270.298 50.5477 279.108 52.9114 283.191C55.2751 287.273 68.8126 304.034 70.1019 311.125C71.3912 318.216 77.4113 319.792 77.1947 315.351C76.9781 310.91 70.9615 295.439 76.1186 294.794C81.2758 294.15 90.0859 281.042 87.7222 272.661Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_29"
                    d="M944.881 7.45738C940.618 7.69816 936.507 9.1216 933.008 11.5681C929.509 14.0146 926.76 17.3874 925.071 21.3084C920.117 33.2822 926.495 47.3472 936.07 56.0787C945.644 64.8101 957.943 69.8009 969.118 76.361C984.128 85.1723 997.615 97.4038 1005.12 113.105C1012.63 128.806 1013.43 148.255 1004.61 163.255C996.412 177.177 981.513 185.51 967.304 193.194"
                    stroke="#343334"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <g id="leaf5">
                    <path
                      id="Vector_30"
                      d="M957.5 17C967.165 17 975 13.1944 975 8.5C975 3.80558 967.165 0 957.5 0C947.835 0 940 3.80558 940 8.5C940 13.1944 947.835 17 957.5 17Z"
                      fill="#DEC79B"
                    />
                  </g>
                  <g id="leaf4">
                    <path
                      id="Vector_31"
                      d="M971.5 73C981.165 73 989 69.1944 989 64.5C989 59.8056 981.165 56 971.5 56C961.835 56 954 59.8056 954 64.5C954 69.1944 961.835 73 971.5 73Z"
                      fill="#DEC79B"
                    />
                  </g>
                  <g id="leaf3">
                    <path
                      id="Vector_32"
                      d="M939.5 82C949.165 82 957 78.1944 957 73.5C957 68.8056 949.165 65 939.5 65C929.835 65 922 68.8056 922 73.5C922 78.1944 929.835 82 939.5 82Z"
                      fill="#DEC79B"
                    />
                  </g>
                  <g id="leaf2">
                    <path
                      id="Vector_33"
                      d="M989.5 129C999.165 129 1007 125.194 1007 120.5C1007 115.806 999.165 112 989.5 112C979.835 112 972 115.806 972 120.5C972 125.194 979.835 129 989.5 129Z"
                      fill="#DEC79B"
                    />
                  </g>
                  <g id="leaf1">
                    <path
                      id="Vector_34"
                      d="M1024.5 129C1034.16 129 1042 125.194 1042 120.5C1042 115.806 1034.16 112 1024.5 112C1014.84 112 1007 115.806 1007 120.5C1007 125.194 1014.84 129 1024.5 129Z"
                      fill="#DEC79B"
                    />
                  </g>
                </g>
                <g id="man">
                  <path
                    id="Vector_35"
                    d="M453.354 574.253C450.843 562.684 450.177 546.883 451.021 535.892C451.021 535.892 438.323 480.106 428.332 474.901L428.328 474.904C428.175 475.101 423.327 481.458 422.711 501.128C422.087 521.111 415.012 534.225 415.012 534.225C415.012 534.225 417.301 559.133 415.992 574.253L453.354 574.253Z"
                    fill="#DEC79B"
                  />
                  <path
                    id="Vector_36"
                    d="M545.728 219.253H315.272C312.15 219.253 309.059 219.868 306.175 221.062C303.291 222.257 300.67 224.008 298.463 226.215C296.255 228.423 294.504 231.043 293.31 233.927C292.115 236.812 291.5 239.903 291.5 243.024V550.481C291.5 553.603 292.115 556.694 293.31 559.578C294.504 562.462 296.255 565.083 298.463 567.29C300.67 569.498 303.291 571.249 306.175 572.443C309.059 573.638 312.15 574.253 315.272 574.253H396.127C393.427 563.053 390.07 545.562 393.469 533.4L393.468 533.392L393.47 533.398C393.629 532.83 393.797 532.27 393.986 531.727C396.321 523.834 397.1 515.563 396.278 507.373C397.779 500.375 397.779 493.139 396.278 486.141C393.78 474.486 392.032 463.036 392.032 463.036C392.032 463.036 390.655 447.634 391.857 438.192C391.883 437.984 391.914 437.788 391.943 437.586C391.519 437.49 391.281 437.434 391.281 437.434C391.281 437.434 394.82 421.406 396.069 411.207C396.364 408.799 396.752 405.746 397.172 402.492C396.019 402.3 394.884 402.013 393.779 401.632C382.539 397.677 379 361.874 379 361.874V350.53C379 350.53 375.253 333.149 388.367 325.447C400.995 318.031 406.037 316.001 406.393 315.861C406.489 315.792 406.583 315.729 406.681 315.653C408.109 314.533 409.238 313.079 409.971 311.42C409.989 311.134 409.993 310.85 409.983 310.568C409.77 306.501 406.939 302.802 404.253 299.575C401.962 296.823 399.671 294.07 397.38 291.318C396.595 290.498 395.991 289.522 395.609 288.453C395.464 287.863 395.401 287.256 395.422 286.649C395.42 286.425 395.422 286.2 395.426 285.976C395.464 283.924 395.519 281.872 395.594 279.821C395.658 278.029 396.109 275.767 397.864 275.399C398.777 275.207 399.985 275.541 400.468 274.743C400.63 274.414 400.671 274.039 400.585 273.683C400.579 273.709 400.577 273.737 400.57 273.763C400.564 273.73 400.558 273.696 400.552 273.663C400.191 272.226 399.973 270.757 399.901 269.277C399.882 268.609 399.977 267.943 400.183 267.307C401.2 264.332 404.701 263.111 407.795 262.55C410.889 261.989 414.361 261.506 416.303 259.033C416.823 258.212 417.387 257.419 417.992 256.659C418.883 255.849 419.977 255.297 421.158 255.062C424.998 254.09 429.055 254.45 432.664 256.083C434.16 256.766 435.664 257.686 437.305 257.582C439.01 257.474 440.467 256.274 442.15 255.982C444.869 255.51 447.469 257.547 448.809 259.96C449.66 261.495 450.086 263.229 450.042 264.983C450.074 266.73 449.444 268.423 448.278 269.724C447.108 270.966 445.361 271.818 444.876 273.454C444.678 274.119 444.724 274.836 444.549 275.508C444.527 275.592 444.491 275.671 444.463 275.752C444.495 275.794 444.53 275.833 444.561 275.875C446.608 278.572 447.98 281.72 448.563 285.056C449.146 288.391 448.922 291.818 447.911 295.049C446.9 298.281 445.13 301.223 442.75 303.632C440.37 306.04 437.449 307.845 434.229 308.894C434.221 309.105 434.213 309.316 434.214 309.527C434.154 310.839 434.376 312.149 434.866 313.368C435.356 314.587 436.102 315.686 437.054 316.592L455.601 324.198C455.601 324.198 466.767 322.845 470.796 339.508C471.442 342.277 471.674 345.127 471.486 347.965C471.339 350.478 471.681 354.901 474.543 360.625C479.122 369.784 478.082 390.807 468.715 392.889C459.842 394.861 456.391 394.032 456.051 393.939L456.031 394.307C456.177 398.252 457.581 432.276 462.678 436.393C464.088 437.532 463.819 438.301 462.662 438.819L462.665 438.822C462.665 438.822 462.674 439.041 462.696 439.434C462.849 441.923 463.636 451.399 467.048 456.791C471.004 463.036 470.589 499.049 470.589 499.049L473.293 520.281C473.293 520.281 471.629 533.394 473.293 535.683C474.239 536.981 475.384 557.087 476.198 574.253H545.728C552.033 574.253 558.079 571.748 562.537 567.29C566.995 562.832 569.5 556.786 569.5 550.481V243.024C569.5 239.903 568.885 236.812 567.69 233.927C566.496 231.043 564.745 228.423 562.537 226.215C560.33 224.008 557.709 222.257 554.825 221.062C551.941 219.868 548.85 219.253 545.728 219.253V219.253Z"
                    fill="#DEC79B"
                  />
                </g>
                <g id="circle1">
                  <g id="Group 1">
                    <path
                      id="Vector_37"
                      d="M282.5 135.253C290.784 135.253 297.5 128.537 297.5 120.253C297.5 111.969 290.784 105.253 282.5 105.253C274.216 105.253 267.5 111.969 267.5 120.253C267.5 128.537 274.216 135.253 282.5 135.253Z"
                      stroke="#3F3D56"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </g>
                </g>
                <g id="circle2">
                  <path
                    id="Vector_38"
                    d="M324.5 135.253C332.784 135.253 339.5 128.537 339.5 120.253C339.5 111.969 332.784 105.253 324.5 105.253C316.216 105.253 309.5 111.969 309.5 120.253C309.5 128.537 316.216 135.253 324.5 135.253Z"
                    stroke="#3F3D56"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="circle3">
                  <path
                    id="Vector_39"
                    d="M366.5 135.253C374.784 135.253 381.5 128.537 381.5 120.253C381.5 111.969 374.784 105.253 366.5 105.253C358.216 105.253 351.5 111.969 351.5 120.253C351.5 128.537 358.216 135.253 366.5 135.253Z"
                    stroke="#3F3D56"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="1032" height="741.753" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="leftContent">
            <div className="about-details" id="about">
              <div className="about-heading">
                <h1>About</h1>
                <h6>Myself</h6>
              </div>
              <p>
                I graduated from the Białystok University of Technology in the
                field of Computer Science, after that I decided to learn
                front-end and I am at the beginning of my path and hungry to
                learn more & more...
              </p>
              <div className="cv-box">
                <a
                  href="https://gofile.io/d/AeMIg4"
                  className="download-cv"
                  id="cv"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
