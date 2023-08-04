import { createComponent } from "../create-component"

export const CheckboxAnatomy = createComponent((props) => {
  const { palette, ...rest } = props

  return (
    <svg width="1456" height="812" viewBox="0 0 1456 812" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M724.204 209V193.166H727.133L727.51 199.27L727.206 198.429C727.273 197.791 727.399 197.144 727.583 196.486C727.776 195.829 728.047 195.225 728.395 194.674C728.752 194.123 729.207 193.683 729.758 193.355C730.318 193.016 731 192.847 731.802 192.847C731.995 192.847 732.189 192.857 732.382 192.876C732.575 192.895 732.754 192.929 732.919 192.977V196.631C732.59 196.525 732.237 196.457 731.86 196.428C731.493 196.39 731.154 196.37 730.845 196.37C730.468 196.37 730.062 196.448 729.627 196.602C729.192 196.747 728.791 196.97 728.424 197.269C728.056 197.569 727.79 197.941 727.626 198.386V209H724.204ZM741.44 209.218C739.98 209.218 738.709 208.903 737.626 208.275C736.544 207.647 735.703 206.723 735.103 205.505C734.504 204.278 734.204 202.775 734.204 200.996C734.204 199.314 734.518 197.864 735.147 196.646C735.785 195.428 736.655 194.495 737.757 193.847C738.859 193.19 740.106 192.861 741.498 192.861C743.006 192.861 744.296 193.19 745.369 193.847C746.452 194.495 747.283 195.428 747.863 196.646C748.443 197.864 748.733 199.314 748.733 200.996C748.733 202.775 748.409 204.278 747.762 205.505C747.124 206.723 746.254 207.647 745.152 208.275C744.05 208.903 742.812 209.218 741.44 209.218ZM741.498 206.303C742.609 206.303 743.518 205.887 744.224 205.056C744.929 204.225 745.282 202.871 745.282 200.996C745.282 199.256 744.939 197.951 744.253 197.081C743.566 196.211 742.629 195.776 741.44 195.776C740.328 195.776 739.419 196.206 738.714 197.066C738.018 197.927 737.67 199.237 737.67 200.996C737.67 202.784 738.023 204.118 738.728 204.998C739.444 205.868 740.367 206.303 741.498 206.303ZM758.234 209.218C756.774 209.218 755.503 208.903 754.42 208.275C753.338 207.647 752.497 206.723 751.897 205.505C751.298 204.278 750.998 202.775 750.998 200.996C750.998 199.314 751.312 197.864 751.941 196.646C752.579 195.428 753.449 194.495 754.551 193.847C755.653 193.19 756.9 192.861 758.292 192.861C759.8 192.861 761.09 193.19 762.163 193.847C763.246 194.495 764.077 195.428 764.657 196.646C765.237 197.864 765.527 199.314 765.527 200.996C765.527 202.775 765.203 204.278 764.556 205.505C763.918 206.723 763.048 207.647 761.946 208.275C760.844 208.903 759.606 209.218 758.234 209.218ZM758.292 206.303C759.403 206.303 760.312 205.887 761.018 205.056C761.723 204.225 762.076 202.871 762.076 200.996C762.076 199.256 761.733 197.951 761.047 197.081C760.36 196.211 759.423 195.776 758.234 195.776C757.122 195.776 756.213 196.206 755.508 197.066C754.812 197.927 754.464 199.237 754.464 200.996C754.464 202.784 754.817 204.118 755.522 204.998C756.238 205.868 757.161 206.303 758.292 206.303ZM773.453 209.232C772.196 209.232 771.215 208.913 770.509 208.275C769.813 207.627 769.465 206.704 769.465 205.505V197.501C769.465 197.182 769.533 196.897 769.668 196.646C769.803 196.385 770.002 196.221 770.263 196.153L769.465 193.804V193.383L770.234 188.642H772.844V204.65C772.844 205.211 772.964 205.602 773.206 205.824C773.457 206.047 773.921 206.158 774.598 206.158C775.033 206.158 775.434 206.158 775.802 206.158C776.169 206.148 776.502 206.139 776.802 206.129V209.044C776.299 209.131 775.748 209.184 775.149 209.203C774.55 209.222 773.984 209.232 773.453 209.232ZM767.392 196.153V193.166H776.831V196.153H767.392Z"
        fill={palette[0]}
      />
      <path
        d="M209.628 386.276C208.062 386.276 206.718 385.932 205.597 385.246C204.475 384.55 203.615 383.583 203.016 382.346C202.426 381.109 202.131 379.673 202.131 378.039C202.131 376.319 202.436 374.849 203.045 373.631C203.654 372.413 204.499 371.485 205.582 370.847C206.665 370.2 207.912 369.876 209.323 369.876C210.725 369.876 211.899 370.137 212.847 370.659C213.804 371.171 214.519 371.862 214.993 372.732C215.466 373.593 215.684 374.555 215.645 375.618H212.354C212.344 375.193 212.276 374.806 212.151 374.458C212.025 374.1 211.836 373.801 211.585 373.559C211.343 373.308 211.034 373.114 210.657 372.979C210.28 372.844 209.84 372.776 209.338 372.776C207.984 372.766 207.022 373.23 206.452 374.168C205.891 375.106 205.611 376.372 205.611 377.967C205.611 379.784 205.949 381.142 206.626 382.041C207.312 382.931 208.381 383.38 209.831 383.39C210.169 383.39 210.536 383.293 210.933 383.1C211.339 382.897 211.682 382.612 211.962 382.244C212.252 381.867 212.392 381.418 212.383 380.896H215.645C215.684 382.008 215.418 382.965 214.848 383.767C214.287 384.569 213.543 385.188 212.615 385.623C211.687 386.058 210.691 386.276 209.628 386.276ZM224.943 386.218C223.483 386.218 222.212 385.903 221.129 385.275C220.047 384.647 219.206 383.723 218.606 382.505C218.007 381.278 217.707 379.775 217.707 377.996C217.707 376.314 218.021 374.864 218.65 373.646C219.288 372.428 220.158 371.495 221.26 370.847C222.362 370.19 223.609 369.861 225.001 369.861C226.509 369.861 227.799 370.19 228.872 370.847C229.955 371.495 230.786 372.428 231.366 373.646C231.946 374.864 232.236 376.314 232.236 377.996C232.236 379.775 231.912 381.278 231.265 382.505C230.627 383.723 229.757 384.647 228.655 385.275C227.553 385.903 226.315 386.218 224.943 386.218ZM225.001 383.303C226.112 383.303 227.021 382.887 227.727 382.056C228.432 381.225 228.785 379.871 228.785 377.996C228.785 376.256 228.442 374.951 227.756 374.081C227.069 373.211 226.132 372.776 224.943 372.776C223.831 372.776 222.922 373.206 222.217 374.066C221.521 374.927 221.173 376.237 221.173 377.996C221.173 379.784 221.526 381.118 222.231 381.998C222.947 382.868 223.87 383.303 225.001 383.303ZM235.546 386V370.166H238.475L238.852 376.14L238.605 374.936C238.721 374.066 238.948 373.245 239.287 372.471C239.635 371.688 240.152 371.055 240.838 370.572C241.525 370.089 242.443 369.847 243.593 369.847C245.092 369.847 246.252 370.316 247.073 371.253C247.895 372.181 248.306 373.602 248.306 375.516V386H244.884V376.705C244.884 375.797 244.792 375.067 244.608 374.516C244.434 373.965 244.149 373.569 243.753 373.327C243.356 373.076 242.83 372.95 242.172 372.95C241.457 372.95 240.804 373.163 240.215 373.588C239.635 374.004 239.219 374.477 238.968 375.009V386H235.546ZM256.729 386.232C255.472 386.232 254.491 385.913 253.785 385.275C253.089 384.627 252.741 383.704 252.741 382.505V374.501C252.741 374.182 252.809 373.897 252.944 373.646C253.08 373.385 253.278 373.221 253.539 373.153L252.741 370.804V370.383L253.51 365.642H256.12V381.65C256.12 382.211 256.241 382.602 256.482 382.824C256.734 383.047 257.198 383.158 257.874 383.158C258.309 383.158 258.711 383.158 259.078 383.158C259.445 383.148 259.779 383.139 260.078 383.129V386.044C259.576 386.131 259.025 386.184 258.425 386.203C257.826 386.222 257.261 386.232 256.729 386.232ZM250.668 373.153V370.166H260.107V373.153H250.668ZM263.3 386V370.166H266.229L266.606 376.27L266.301 375.429C266.369 374.791 266.495 374.144 266.678 373.486C266.872 372.829 267.142 372.225 267.49 371.674C267.848 371.123 268.302 370.683 268.853 370.355C269.414 370.016 270.095 369.847 270.898 369.847C271.091 369.847 271.284 369.857 271.478 369.876C271.671 369.895 271.85 369.929 272.014 369.977V373.631C271.686 373.525 271.333 373.457 270.956 373.428C270.588 373.39 270.25 373.37 269.941 373.37C269.564 373.37 269.158 373.448 268.723 373.602C268.288 373.747 267.887 373.97 267.519 374.269C267.152 374.569 266.886 374.941 266.722 375.386V386H263.3ZM280.535 386.218C279.076 386.218 277.805 385.903 276.722 385.275C275.639 384.647 274.798 383.723 274.199 382.505C273.6 381.278 273.3 379.775 273.3 377.996C273.3 376.314 273.614 374.864 274.242 373.646C274.88 372.428 275.75 371.495 276.852 370.847C277.954 370.19 279.201 369.861 280.593 369.861C282.101 369.861 283.392 370.19 284.465 370.847C285.548 371.495 286.379 372.428 286.959 373.646C287.539 374.864 287.829 376.314 287.829 377.996C287.829 379.775 287.505 381.278 286.857 382.505C286.219 383.723 285.349 384.647 284.247 385.275C283.145 385.903 281.908 386.218 280.535 386.218ZM280.593 383.303C281.705 383.303 282.614 382.887 283.319 382.056C284.025 381.225 284.378 379.871 284.378 377.996C284.378 376.256 284.035 374.951 283.348 374.081C282.662 373.211 281.724 372.776 280.535 372.776C279.424 372.776 278.515 373.206 277.809 374.066C277.113 374.927 276.765 376.237 276.765 377.996C276.765 379.784 277.118 381.118 277.824 381.998C278.539 382.868 279.462 383.303 280.593 383.303ZM291.083 386V363.438H294.505V386H291.083Z"
        fill={palette[0]}
      />
      <path
        d="M776.233 562V539.438H779.655V562H776.233ZM787.978 562.174C787.011 562.174 786.155 561.995 785.411 561.637C784.667 561.27 784.082 560.763 783.657 560.115C783.241 559.467 783.033 558.718 783.033 557.867C783.033 556.93 783.202 556.156 783.541 555.547C783.879 554.938 784.367 554.455 785.005 554.097C785.653 553.73 786.412 553.45 787.282 553.256C787.9 553.121 788.553 553.01 789.239 552.923C789.935 552.836 790.578 552.768 791.168 552.72C791.757 552.662 792.212 552.623 792.531 552.604V551.966C792.531 550.893 792.313 550.091 791.878 549.559C791.453 549.018 790.728 548.747 789.703 548.747C789.046 548.747 788.495 548.829 788.05 548.993C787.605 549.148 787.267 549.448 787.035 549.892C786.813 550.327 786.692 550.965 786.673 551.806H783.555C783.449 550.443 783.642 549.327 784.135 548.457C784.638 547.577 785.382 546.93 786.368 546.514C787.364 546.089 788.538 545.876 789.892 545.876C790.694 545.876 791.448 545.968 792.154 546.151C792.869 546.325 793.502 546.63 794.053 547.065C794.604 547.49 795.039 548.075 795.358 548.819C795.677 549.564 795.837 550.506 795.837 551.647V562H792.487L792.531 558.447C792.347 559.52 791.883 560.41 791.139 561.115C790.394 561.821 789.341 562.174 787.978 562.174ZM788.891 559.593C789.394 559.593 789.901 559.506 790.414 559.332C790.936 559.158 791.39 558.907 791.777 558.578C792.173 558.249 792.424 557.863 792.531 557.418V554.518C792.144 554.557 791.685 554.624 791.153 554.721C790.631 554.818 790.182 554.905 789.805 554.982C788.722 555.204 787.939 555.499 787.456 555.866C786.982 556.224 786.745 556.775 786.745 557.519C786.745 557.945 786.842 558.317 787.035 558.636C787.238 558.945 787.504 559.182 787.833 559.346C788.161 559.511 788.514 559.593 788.891 559.593ZM807.691 562.174C806.647 562.174 805.815 562 805.197 561.652C804.578 561.304 804.124 560.898 803.834 560.434C803.544 559.96 803.36 559.545 803.283 559.187L802.529 558.505L803.471 558.099C803.539 558.341 803.689 558.578 803.921 558.81C804.162 559.032 804.501 559.216 804.936 559.361C805.38 559.496 805.926 559.564 806.574 559.564C807.657 559.564 808.551 559.143 809.257 558.302C809.962 557.461 810.315 556.065 810.315 554.112C810.315 552.353 809.982 551.028 809.315 550.139C808.657 549.24 807.816 548.79 806.792 548.79C806.067 548.79 805.467 548.892 804.994 549.095C804.53 549.298 804.177 549.535 803.935 549.805C803.693 550.076 803.539 550.318 803.471 550.53L803.254 550.327L803.486 549.776C803.534 549.042 803.718 548.384 804.037 547.804C804.365 547.215 804.849 546.746 805.487 546.398C806.134 546.05 806.951 545.876 807.937 545.876C809.213 545.876 810.286 546.219 811.156 546.905C812.026 547.582 812.683 548.515 813.128 549.704C813.582 550.883 813.81 552.246 813.81 553.793C813.81 555.195 813.636 556.422 813.288 557.476C812.949 558.52 812.485 559.39 811.896 560.086C811.316 560.782 810.663 561.304 809.938 561.652C809.213 562 808.464 562.174 807.691 562.174ZM800.093 562L800.078 539.438H803.486V546.615L803.5 558.433L803.747 558.984L803.471 559.549L803.326 562H800.093ZM823.901 562.218C822.373 562.218 821.049 561.908 819.928 561.289C818.816 560.661 817.96 559.738 817.361 558.52C816.762 557.302 816.462 555.808 816.462 554.039C816.462 552.319 816.776 550.849 817.405 549.631C818.043 548.404 818.917 547.471 820.029 546.833C821.141 546.185 822.417 545.861 823.857 545.861C825.278 545.861 826.491 546.142 827.497 546.702C828.512 547.263 829.285 548.094 829.817 549.196C830.348 550.289 830.614 551.632 830.614 553.227C830.614 553.537 830.604 553.793 830.585 553.996C830.575 554.199 830.561 554.441 830.542 554.721H819.87C819.957 556.335 820.353 557.524 821.059 558.288C821.764 559.042 822.629 559.419 823.654 559.419C824.611 559.419 825.341 559.216 825.844 558.81C826.356 558.394 826.685 557.93 826.83 557.418H830.136C830.049 558.433 829.73 559.303 829.179 560.028C828.628 560.743 827.898 561.289 826.989 561.666C826.09 562.034 825.061 562.218 823.901 562.218ZM821.436 552.386H827.207C827.178 551.226 826.897 550.332 826.366 549.704C825.834 549.066 824.959 548.747 823.741 548.747C822.475 548.747 821.532 549.172 820.914 550.023C820.295 550.864 819.947 552.029 819.87 553.517C819.947 553.082 820.111 552.788 820.363 552.633C820.614 552.469 820.972 552.386 821.436 552.386ZM833.723 562V539.438H837.145V562H833.723Z"
        fill={palette[0]}
      />
      <path
        d="M750 305.547L761.547 294L750 282.453L738.453 294L750 305.547ZM748 225.5V294H752V225.5H748Z"
        fill={palette[1]}
      />
      <path
        d="M595.635 406.53C592.808 406.53 590.362 406.08 588.295 405.178C586.228 404.277 584.62 402.926 583.472 401.124C582.323 399.304 581.723 397.025 581.67 394.287H587.712C587.782 395.771 588.144 397.016 588.798 398.023C589.469 399.03 590.406 399.781 591.607 400.276C592.826 400.771 594.292 401.018 596.006 401.018C597.649 401.018 598.992 400.824 600.034 400.435C601.076 400.046 601.845 399.499 602.34 398.792C602.834 398.068 603.082 397.22 603.082 396.248C603.082 395.188 602.781 394.296 602.181 393.571C601.58 392.829 600.626 392.14 599.319 391.504C598.029 390.851 596.315 390.153 594.178 389.411C591.969 388.651 590.035 387.724 588.374 386.628C586.731 385.533 585.45 384.235 584.532 382.733C583.631 381.214 583.18 379.438 583.18 377.407C583.18 373.979 584.302 371.364 586.546 369.562C588.789 367.76 591.863 366.859 595.768 366.859C598.471 366.859 600.661 367.275 602.34 368.105C604.018 368.935 605.281 370.163 606.129 371.788C606.995 373.396 607.569 375.392 607.851 377.777H601.783C601.624 376.558 601.297 375.551 600.803 374.756C600.308 373.961 599.628 373.37 598.762 372.981C597.914 372.575 596.845 372.371 595.556 372.371C593.559 372.371 592.022 372.778 590.945 373.59C589.867 374.385 589.328 375.578 589.328 377.168C589.328 378.069 589.496 378.89 589.832 379.632C590.185 380.374 590.9 381.108 591.978 381.832C593.073 382.556 594.716 383.351 596.907 384.217C598.603 384.888 600.193 385.533 601.677 386.151C603.179 386.752 604.495 387.45 605.626 388.245C606.774 389.04 607.675 390.029 608.329 391.213C608.982 392.397 609.318 393.898 609.335 395.718C609.371 399.216 608.223 401.892 605.891 403.747C603.576 405.603 600.158 406.53 595.635 406.53ZM622.569 406.583C620.061 406.583 618.047 405.708 616.527 403.959C615.008 402.21 614.248 399.702 614.248 396.433V377.062H620.502V394.764C620.502 396.177 620.661 397.343 620.979 398.262C621.297 399.181 621.801 399.852 622.49 400.276C623.179 400.7 624.071 400.912 625.166 400.912C626.491 400.912 627.684 400.532 628.744 399.772C629.822 398.995 630.581 398.121 631.023 397.149V377.062H637.277V406H631.95L631.235 395.082L631.712 397.281C631.5 398.871 631.076 400.373 630.44 401.786C629.822 403.2 628.876 404.357 627.604 405.258C626.35 406.141 624.672 406.583 622.569 406.583ZM659.066 406.318C657.158 406.318 655.639 406 654.508 405.364C653.378 404.728 652.547 403.986 652.017 403.138C651.487 402.272 651.152 401.513 651.01 400.859L649.632 399.613L651.355 398.871C651.479 399.313 651.752 399.746 652.176 400.17C652.618 400.576 653.236 400.912 654.031 401.177C654.844 401.424 655.842 401.548 657.026 401.548C659.005 401.548 660.639 400.779 661.928 399.242C663.218 397.705 663.863 395.153 663.863 391.584C663.863 388.369 663.253 385.948 662.034 384.323C660.833 382.68 659.296 381.858 657.423 381.858C656.098 381.858 655.003 382.044 654.137 382.415C653.289 382.786 652.645 383.219 652.203 383.713C651.761 384.208 651.479 384.65 651.355 385.038L650.957 384.667L651.381 383.66C651.47 382.318 651.805 381.116 652.388 380.056C652.989 378.979 653.872 378.122 655.038 377.486C656.222 376.85 657.715 376.532 659.517 376.532C661.849 376.532 663.81 377.159 665.4 378.413C666.99 379.65 668.191 381.355 669.004 383.528C669.834 385.683 670.249 388.174 670.249 391.001C670.249 393.563 669.931 395.806 669.295 397.732C668.677 399.64 667.829 401.23 666.751 402.502C665.691 403.774 664.499 404.728 663.174 405.364C661.849 406 660.48 406.318 659.066 406.318ZM645.18 406L645.154 364.766H651.381V377.883L651.408 399.481L651.858 400.488L651.355 401.521L651.09 406H645.18ZM686.348 406.451C684.175 406.451 682.232 406.133 680.518 405.496C678.822 404.86 677.471 403.88 676.464 402.555C675.474 401.212 674.927 399.499 674.821 397.414H680.863C681.092 398.898 681.684 399.949 682.638 400.567C683.61 401.186 684.802 401.495 686.216 401.495C687.24 401.495 688.15 401.398 688.945 401.203C689.758 400.991 690.394 400.647 690.853 400.17C691.33 399.675 691.569 399.013 691.569 398.182C691.569 397.599 691.436 397.122 691.171 396.751C690.924 396.363 690.535 396.027 690.005 395.744C689.493 395.462 688.839 395.197 688.044 394.949C687.267 394.702 686.366 394.428 685.341 394.128C683.504 393.598 681.834 392.971 680.333 392.246C678.831 391.522 677.639 390.577 676.755 389.411C675.872 388.227 675.43 386.69 675.43 384.8C675.43 382.221 676.384 380.207 678.292 378.758C680.2 377.292 682.656 376.558 685.659 376.558C687.603 376.558 689.352 376.841 690.906 377.407C692.479 377.954 693.768 378.873 694.775 380.162C695.782 381.434 696.436 383.166 696.736 385.356L690.694 385.33C690.429 384.305 690.041 383.519 689.528 382.971C689.016 382.406 688.424 382.017 687.753 381.805C687.099 381.576 686.384 381.461 685.606 381.461C684.758 381.461 684.025 381.593 683.407 381.858C682.788 382.123 682.311 382.494 681.976 382.971C681.64 383.448 681.472 384.023 681.472 384.694C681.472 385.471 681.693 386.125 682.135 386.655C682.594 387.167 683.274 387.618 684.175 388.006C685.094 388.377 686.233 388.766 687.594 389.172C688.689 389.49 689.82 389.844 690.986 390.232C692.152 390.603 693.238 391.08 694.245 391.663C695.252 392.246 696.065 393.024 696.683 393.995C697.302 394.949 697.611 396.195 697.611 397.732C697.611 400.47 696.577 402.608 694.51 404.145C692.461 405.682 689.74 406.451 686.348 406.451ZM715.587 406.504C712.725 406.504 710.269 405.876 708.22 404.622C706.171 403.35 704.598 401.583 703.503 399.322C702.425 397.061 701.886 394.437 701.886 391.451C701.886 388.307 702.443 385.621 703.556 383.395C704.669 381.169 706.215 379.473 708.193 378.307C710.172 377.124 712.451 376.532 715.03 376.532C717.592 376.532 719.739 377.009 721.47 377.963C723.219 378.899 724.526 380.162 725.392 381.752C726.258 383.325 726.655 385.083 726.584 387.026H720.569C720.551 386.249 720.428 385.542 720.198 384.906C719.968 384.252 719.624 383.705 719.164 383.263C718.723 382.804 718.157 382.45 717.468 382.203C716.779 381.956 715.976 381.832 715.057 381.832C712.584 381.814 710.826 382.662 709.783 384.376C708.759 386.09 708.246 388.404 708.246 391.319C708.246 394.64 708.865 397.122 710.101 398.765C711.356 400.391 713.308 401.212 715.958 401.23C716.576 401.23 717.248 401.053 717.972 400.7C718.714 400.329 719.341 399.808 719.853 399.136C720.383 398.447 720.64 397.626 720.622 396.672H726.584C726.655 398.704 726.169 400.453 725.127 401.919C724.102 403.385 722.742 404.516 721.046 405.311C719.35 406.106 717.53 406.504 715.587 406.504ZM732.211 406V377.062H737.564L738.253 388.218L737.696 386.681C737.82 385.515 738.049 384.332 738.385 383.13C738.738 381.929 739.233 380.825 739.869 379.818C740.523 378.811 741.353 378.007 742.36 377.407C743.385 376.788 744.63 376.479 746.097 376.479C746.45 376.479 746.803 376.497 747.157 376.532C747.51 376.567 747.837 376.629 748.137 376.717V383.395C747.536 383.201 746.892 383.077 746.203 383.024C745.531 382.954 744.913 382.918 744.348 382.918C743.659 382.918 742.917 383.06 742.122 383.342C741.327 383.607 740.593 384.014 739.922 384.561C739.251 385.109 738.765 385.789 738.465 386.602V406H732.211ZM752.811 406V377.062H759.145L759.065 406H752.811ZM756.018 372.795C754.87 372.795 753.898 372.398 753.103 371.603C752.308 370.79 751.91 369.757 751.91 368.502C751.91 367.266 752.308 366.259 753.103 365.481C753.898 364.704 754.87 364.315 756.018 364.315C757.131 364.315 758.085 364.704 758.88 365.481C759.693 366.259 760.099 367.266 760.099 368.502C760.099 369.757 759.693 370.79 758.88 371.603C758.085 372.398 757.131 372.795 756.018 372.795ZM780.956 406.318C779.048 406.318 777.529 406 776.398 405.364C775.267 404.728 774.437 403.986 773.907 403.138C773.377 402.272 773.041 401.513 772.9 400.859L771.522 399.613L773.245 398.871C773.368 399.313 773.642 399.746 774.066 400.17C774.508 400.576 775.126 400.912 775.921 401.177C776.734 401.424 777.732 401.548 778.916 401.548C780.894 401.548 782.528 400.779 783.818 399.242C785.108 397.705 785.753 395.153 785.753 391.584C785.753 388.369 785.143 385.948 783.924 384.323C782.723 382.68 781.186 381.858 779.313 381.858C777.988 381.858 776.893 382.044 776.027 382.415C775.179 382.786 774.534 383.219 774.093 383.713C773.651 384.208 773.368 384.65 773.245 385.038L772.847 384.667L773.271 383.66C773.359 382.318 773.695 381.116 774.278 380.056C774.879 378.979 775.762 378.122 776.928 377.486C778.112 376.85 779.605 376.532 781.407 376.532C783.739 376.532 785.7 377.159 787.29 378.413C788.88 379.65 790.081 381.355 790.894 383.528C791.724 385.683 792.139 388.174 792.139 391.001C792.139 393.563 791.821 395.806 791.185 397.732C790.567 399.64 789.719 401.23 788.641 402.502C787.581 403.774 786.389 404.728 785.064 405.364C783.739 406 782.369 406.318 780.956 406.318ZM767.07 406L767.044 364.766H773.271V377.883L773.298 399.481L773.748 400.488L773.245 401.521L772.98 406H767.07ZM810.581 406.398C807.79 406.398 805.37 405.832 803.32 404.701C801.289 403.553 799.725 401.866 798.63 399.64C797.535 397.414 796.987 394.684 796.987 391.451C796.987 388.307 797.561 385.621 798.709 383.395C799.875 381.152 801.474 379.447 803.506 378.281C805.538 377.097 807.87 376.505 810.502 376.505C813.099 376.505 815.316 377.018 817.153 378.042C819.008 379.067 820.422 380.586 821.393 382.6C822.365 384.597 822.851 387.052 822.851 389.967C822.851 390.533 822.833 391.001 822.798 391.372C822.78 391.743 822.754 392.185 822.718 392.697H803.214C803.373 395.647 804.098 397.82 805.387 399.216C806.677 400.594 808.258 401.283 810.131 401.283C811.88 401.283 813.214 400.912 814.132 400.17C815.069 399.41 815.669 398.562 815.934 397.626H821.976C821.817 399.481 821.234 401.071 820.227 402.396C819.22 403.703 817.887 404.701 816.226 405.39C814.583 406.062 812.701 406.398 810.581 406.398ZM806.076 388.43H816.623C816.57 386.31 816.058 384.676 815.086 383.528C814.115 382.362 812.516 381.779 810.29 381.779C807.976 381.779 806.253 382.556 805.122 384.111C803.992 385.648 803.356 387.777 803.214 390.497C803.356 389.702 803.656 389.164 804.115 388.881C804.575 388.581 805.228 388.43 806.076 388.43ZM846.698 406.424C844.401 406.424 842.608 405.841 841.319 404.675C840.047 403.491 839.411 401.804 839.411 399.613V384.985C839.411 384.402 839.534 383.881 839.782 383.422C840.029 382.945 840.391 382.645 840.868 382.521L839.411 378.228V377.459L840.815 368.794H845.585V398.05C845.585 399.075 845.806 399.79 846.248 400.196C846.707 400.603 847.555 400.806 848.792 400.806C849.587 400.806 850.32 400.806 850.991 400.806C851.662 400.788 852.272 400.771 852.82 400.753V406.08C851.901 406.239 850.894 406.336 849.799 406.371C848.703 406.406 847.67 406.424 846.698 406.424ZM835.621 382.521V377.062H852.873V382.521H835.621ZM869.452 406.398C866.784 406.398 864.461 405.823 862.482 404.675C860.503 403.527 858.966 401.839 857.871 399.613C856.776 397.37 856.228 394.623 856.228 391.372C856.228 388.298 856.802 385.648 857.951 383.422C859.117 381.196 860.707 379.491 862.721 378.307C864.735 377.106 867.014 376.505 869.558 376.505C872.314 376.505 874.672 377.106 876.633 378.307C878.612 379.491 880.131 381.196 881.191 383.422C882.251 385.648 882.781 388.298 882.781 391.372C882.781 394.623 882.189 397.37 881.006 399.613C879.84 401.839 878.25 403.527 876.236 404.675C874.222 405.823 871.96 406.398 869.452 406.398ZM869.558 401.071C871.589 401.071 873.25 400.311 874.54 398.792C875.829 397.273 876.474 394.799 876.474 391.372C876.474 388.192 875.847 385.807 874.593 384.217C873.338 382.627 871.625 381.832 869.452 381.832C867.42 381.832 865.759 382.618 864.47 384.19C863.198 385.763 862.562 388.157 862.562 391.372C862.562 394.64 863.206 397.078 864.496 398.686C865.803 400.276 867.491 401.071 869.558 401.071ZM895.756 406L912.133 376.903L915.207 372.981L911.736 373.14H897.956V367.469H924.774L908.317 396.857L905.376 400.753L910.755 400.567H923.926V406H895.756ZM936.692 406.318C934.925 406.318 933.361 405.991 932.001 405.337C930.641 404.666 929.572 403.739 928.795 402.555C928.035 401.371 927.655 400.002 927.655 398.447C927.655 396.734 927.964 395.32 928.583 394.207C929.201 393.094 930.093 392.211 931.259 391.557C932.443 390.886 933.83 390.374 935.42 390.02C936.55 389.773 937.743 389.57 938.997 389.411C940.269 389.252 941.444 389.128 942.522 389.04C943.599 388.934 944.43 388.863 945.013 388.828V387.662C945.013 385.701 944.615 384.235 943.82 383.263C943.043 382.274 941.718 381.779 939.845 381.779C938.644 381.779 937.637 381.929 936.824 382.229C936.011 382.512 935.393 383.06 934.969 383.872C934.563 384.667 934.342 385.833 934.307 387.37H928.609C928.415 384.879 928.768 382.839 929.669 381.249C930.588 379.641 931.948 378.458 933.75 377.698C935.57 376.921 937.716 376.532 940.19 376.532C941.656 376.532 943.034 376.7 944.324 377.035C945.631 377.353 946.788 377.91 947.795 378.705C948.802 379.482 949.597 380.551 950.18 381.911C950.763 383.272 951.055 384.994 951.055 387.079V406H944.933L945.013 399.507C944.677 401.468 943.829 403.094 942.469 404.383C941.108 405.673 939.183 406.318 936.692 406.318ZM938.361 401.601C939.28 401.601 940.207 401.442 941.144 401.124C942.098 400.806 942.928 400.347 943.635 399.746C944.359 399.145 944.818 398.439 945.013 397.626V392.326C944.306 392.397 943.467 392.52 942.495 392.697C941.541 392.874 940.72 393.033 940.031 393.174C938.052 393.58 936.621 394.119 935.738 394.79C934.872 395.444 934.439 396.451 934.439 397.811C934.439 398.589 934.616 399.269 934.969 399.852C935.34 400.417 935.826 400.85 936.427 401.15C937.027 401.451 937.672 401.601 938.361 401.601ZM970.205 417.819C967.855 417.819 965.735 417.43 963.845 416.653C961.972 415.893 960.524 414.727 959.499 413.155C958.474 411.583 958.077 409.613 958.307 407.246H964.349C964.331 408.253 964.455 409.154 964.72 409.949C964.985 410.761 965.541 411.406 966.389 411.883C967.237 412.36 968.527 412.599 970.258 412.599C971.76 412.599 972.908 412.387 973.703 411.963C974.516 411.539 975.063 410.894 975.346 410.028C975.629 409.162 975.77 408.041 975.77 406.663V398.818C975.611 399.649 975.267 400.523 974.737 401.442C974.207 402.361 973.385 403.138 972.272 403.774C971.159 404.392 969.657 404.701 967.767 404.701C966.053 404.701 964.525 404.322 963.183 403.562C961.84 402.802 960.7 401.778 959.764 400.488C958.828 399.198 958.112 397.75 957.618 396.142C957.141 394.517 956.902 392.838 956.902 391.107C956.902 387.892 957.432 385.206 958.492 383.051C959.57 380.896 960.957 379.27 962.653 378.175C964.349 377.08 966.142 376.532 968.032 376.532C969.71 376.532 971.062 376.762 972.087 377.221C973.129 377.68 973.942 378.237 974.525 378.89C975.108 379.544 975.532 380.189 975.797 380.825L975.823 377.088H981.945V406.61C981.945 409.224 981.432 411.353 980.408 412.996C979.401 414.639 978.014 415.84 976.247 416.6C974.48 417.377 972.466 417.784 970.205 417.819ZM969.914 399.693C971.239 399.693 972.307 399.516 973.12 399.163C973.933 398.792 974.551 398.359 974.975 397.864C975.399 397.352 975.664 396.91 975.77 396.539V384.429C975.593 384.005 975.267 383.59 974.79 383.183C974.313 382.777 973.685 382.441 972.908 382.176C972.131 381.911 971.177 381.779 970.046 381.779C968.085 381.779 966.477 382.503 965.223 383.952C963.969 385.401 963.342 387.671 963.342 390.762C963.342 393.571 963.96 395.762 965.197 397.334C966.451 398.907 968.023 399.693 969.914 399.693Z"
        fill={palette[0]}
      />
      <rect x="430" y="333" width="107" height="107" fill={palette[5]} stroke={palette[8]} strokeWidth="4" />
      <path
        d="M505 374L473.492 405.508L461 389.254"
        stroke={palette[0]}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="394.36"
        y="295.36"
        width="656.28"
        height="183.28"
        stroke={palette[9]}
        strokeWidth="2.71984"
        strokeDasharray="10.88 10.88"
      />
      <path
        d="M439.547 376L428 364.453L416.453 376L428 387.547L439.547 376ZM320 378H428V374H320V378Z"
        fill={palette[1]}
      />
      <path
        d="M804 417.453L792.453 429L804 440.547L815.547 429L804 417.453ZM806 520V429H802V520H806Z"
        fill={palette[1]}
      />
    </svg>
  )
})