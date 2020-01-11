/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';


// If you don't want to make all icons in one file,
// try to set generate_mode to "depends-on" in root file "iconfont.json".
// And then regenerate icons by using cli command.
export const Icon = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'author':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M983.359394 253.724679c-47.535643-78.727039-178.554652-93.514837-335.864444-51.341319-54.628178-51.052746-127.761825-82.531692-208.419843-82.531692-168.811754 0-305.683051 136.871297-305.683051 305.683051 0 28.797883 4.267187 56.529481 11.703553 82.935897C38.205137 626.40154-7.342222 746.812957 39.532365 824.358077c73.308633 121.217782 344.023264 91.785449 604.648097-65.811892C904.806317 600.976474 1056.664957 374.943484 983.359394 253.724679zM312.726467 598.179778c-53.099359-38.944987-87.605244-101.759615-87.605244-172.645059 0-118.104885 95.764064-213.867926 213.896578-213.867926 103.374392 0 189.624778 73.307609 209.601762 170.742732C584.737628 608.904027 312.726467 598.179778 312.726467 598.179778z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'tv':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M981.169338 288.118996c-88.797225-12.767601-183.386269-22.015312-282.071185-27.231149l164.890847-164.890847-63.998-63.998-224.536983 224.536983c-20.991344-0.351989-42.142683-0.543983-63.454017-0.543983l0 0-255.992-255.992-63.998 63.998 194.201931 194.201931c-120.924221 4.255867-236.344614 14.527546-343.381269 29.919065-27.51914 107.708634-42.814662 226.744914-42.814662 351.893003s15.263523 244.15237 42.814662 351.893003c143.643511 20.639355 302.326552 32.094997 469.169338 32.094997s325.525827-11.455642 469.169338-32.094997c27.51914-107.708634 42.814662-226.744914 42.814662-351.893003s-15.263523-244.15237-42.814662-351.893003zM863.893003 874.596669c-107.740633 13.75957-226.744914 21.407331-351.893003 21.407331s-244.15237-7.647761-351.893003-21.407331c-20.639355-71.805756-32.094997-151.163276-32.094997-234.584669s11.455642-162.778913 32.094997-234.584669c107.708634-13.75957 226.744914-21.407331 351.893003-21.407331s244.15237 7.647761 351.861004 21.407331c20.639355 71.805756 32.126996 151.163276 32.126996 234.584669s-11.455642 162.778913-32.094997 234.584669z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'book':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M944.85801 287.73733c14.31196 20.388353 17.533328 43.455721 9.660011 69.202105L806.991036 842.989413c-6.800893 22.89136-20.48045 42.11519-41.039695 57.667398-20.559245 15.555278-42.461067 23.335475-65.718771 23.344684L205.063911 924.001495c-27.54024 0-54.097082-9.568936-79.673597-28.704762-25.576515-19.140942-43.37181-42.652426-53.387931-70.543659-8.580422-23.963785-8.93551-46.676066-1.064238-68.13582 0-1.431605 0.536212-6.259564 1.603521-14.483876 1.071402-8.218172 1.788739-14.83487 2.14792-19.84293 0.360204-2.864234-0.174985-6.708795-1.602498-11.535731-1.432629-4.827959-1.967818-8.311293-1.608637-10.455119 0.712221-3.936659 2.139733-7.688099 4.296863-11.264555 2.153036-3.575432 5.101181-7.77508 8.847505-12.602016 3.742231-4.828982 6.694469-9.027607 8.846482-12.603039 8.218172-13.592576 16.267499-29.952172 24.13877-49.093115 7.869225-19.135826 13.232372-35.499515 16.087397-49.087998 1.071402-3.575432 1.159406-8.939603 0.267083-16.09149-0.887206-7.14677-0.979304-12.155854-0.267083-15.020088 1.071402-3.936659 4.111644-8.944719 9.119705-15.020088 5.002944-6.079462 8.04421-10.19213 9.115612-12.335956 7.511067-12.876262 15.024182-29.332049 22.532179-49.360198 7.512091-20.027126 11.982916-36.118616 13.415544-48.278563 0.361227-3.216251-0.086981-8.93551-1.338485-17.168008-1.252527-8.232498-1.160429-13.240559 0.272199-15.025205 1.431605-4.64274 5.368264-10.099009 11.803837-16.35448 6.441713-6.260587 10.377348-10.283204 11.809977-12.07706 6.800893-9.3039 14.400988-24.416086 22.804379-45.336558 8.399297-20.918425 13.319353-38.174438 14.753005-51.761897 0.35918-2.865257-0.177032-7.430226-1.608637-13.685697-1.432629-6.260587-1.786693-11.000542-1.066285-14.210653 0.712221-2.864234 2.319835-6.084579 4.822842-9.660011 2.498914-3.576455 5.719258-7.688099 9.655917-12.33084 3.935636-4.647857 6.976902-8.404414 9.119705-11.268648 2.864234-4.296863 5.812379-9.749038 8.847505-16.359596 3.035126-6.606465 5.719258-12.866029 8.052396-18.775622 2.333138-5.90857 5.188162-12.348236 8.574283-19.315928 3.38612-6.970762 6.870478-12.695137 10.455119-17.172101 3.584642-4.472871 8.320503-8.676613 14.211676-12.603039 5.884011-3.923356 12.325723-5.983271 19.315928-6.172583s15.481599 0.789992 25.479301 2.942005l-0.540306 1.608637c13.585413-3.211135 22.706141-4.818749 27.350928-4.818749l408.271544 0c26.467815 0 46.850028 10.012028 61.154825 30.040177 14.299681 20.032242 17.517979 43.279712 9.655917 69.747527L722.736097 685.835164c-12.881378 42.559305-25.668613 70.01154-38.363749 82.347496-12.701277 12.340049-35.676547 18.507516-68.936045 18.507516L149.231301 786.690176c-9.655917 0-16.448624 2.684132-20.384259 8.052396-3.935636 5.720282-4.115738 13.408381-0.540306 23.072485 8.580422 25.036209 34.332946 37.551244 77.257571 37.551244l495.16866 0c10.371208 0 20.388353-2.772136 30.04427-8.320503 9.651824-5.54939 15.911388-12.968359 18.775622-22.258956l160.936389-529.509792c2.50403-7.873318 3.400446-18.069541 2.690272-30.585599 13.592576 5.369288 24.139793 13.06148 31.650861 23.072485L944.85801 287.73733zM374.039393 288.818965c-1.431605 4.64274-1.075495 8.671497 1.067308 12.07706 2.14485 3.40454 5.719258 5.099135 10.727319 5.090948l326.178851 0c4.641717 0 9.207709-1.694595 13.684674-5.090948 4.470825-3.39533 7.423063-7.419993 8.846482-12.07706l11.264555-34.341133c1.432629-4.647857 1.077541-8.671497-1.068332-12.07706-2.142803-3.40454-5.714142-5.101181-10.723226-5.090948L407.84022 237.309824c-4.647857 0-9.206686 1.695618-13.68365 5.090948-4.477988 3.39533-7.42511 7.41897-8.847505 12.07706L374.039393 288.818965zM329.504084 426.157913c-1.431605 4.647857-1.077541 8.671497 1.066285 12.076036 2.142803 3.405563 5.714142 5.104251 10.722202 5.095042l326.177827 0c4.647857 0 9.208732-1.699712 13.685697-5.095042 4.476965-3.390213 7.423063-7.419993 8.846482-12.076036l11.269671-34.336016c1.431605-4.647857 1.076518-8.676613-1.068332-12.081153-2.142803-3.40454-5.719258-5.101181-10.726296-5.091972L363.303888 374.648772c-4.64888 0-9.211802 1.700735-13.685697 5.091972-4.475941 3.39533-7.42818 7.424086-8.851599 12.081153L329.504084 426.157913zM329.504084 426.157913"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'back':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M769.405 977.483c-27.074 27.568-71.045 27.568-98.121 0l-416.591-423.804c-27.173-27.568-27.173-72.231 0-99.899l416.492-423.804c13.537-13.734 31.324-20.652 49.109-20.652s35.572 6.917 49.109 20.652c27.173 27.568 27.173 72.331 0 99.899l-367.482 373.806 367.482 373.904c27.074 27.568 27.074 72.231 0 99.899z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'game':
      return (
        <Svg viewBox="0 0 1098 1024" width={size} height={size} {...rest}>
          <Path
            d="M475.488 621.728l0-73.152q0-8-5.152-13.152t-13.152-5.152l-109.728 0 0-109.728q0-8-5.152-13.152t-13.152-5.152l-73.152 0q-8 0-13.152 5.152t-5.152 13.152l0 109.728-109.728 0q-8 0-13.152 5.152t-5.152 13.152l0 73.152q0 8 5.152 13.152t13.152 5.152l109.728 0 0 109.728q0 8 5.152 13.152t13.152 5.152l73.152 0q8 0 13.152-5.152t5.152-13.152l0-109.728 109.728 0q8 0 13.152-5.152t5.152-13.152zM804.64 658.272q0-30.272-21.44-51.712t-51.712-21.44-51.712 21.44-21.44 51.712 21.44 51.712 51.712 21.44 51.712-21.44 21.44-51.712zM950.912 512q0-30.272-21.44-51.712t-51.712-21.44-51.712 21.44-21.44 51.712 21.44 51.712 51.712 21.44 51.712-21.44 21.44-51.712zM1097.216 585.152q0 121.152-85.728 206.848t-206.848 85.728q-109.728 0-193.152-73.152l-125.728 0q-83.424 73.152-193.152 73.152-121.152 0-206.848-85.728t-85.728-206.848 85.728-206.848 206.848-85.728l512 0q121.152 0 206.848 85.728t85.728 206.848z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'home':
      return (
        <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
          <Path
            d="M1016.43865 533.882435C988.501259 503.674435 586.447694 82.031304 561.359694 54.850783c-22.505739-24.375652-76.087652-24.798609-98.57113 0C428.573607 92.605217 28.568042 512.022261 8.733607 532.813913-15.998219 558.747826 15.47865 585.015652 57.774303 585.015652L122.21952 585.015652l0 329.416348c0 40.403478 32.834783 73.149217 73.327304 73.149217l219.024696 0L414.57152 719.36l195.072 0 0 268.221217 221.250783 0c40.492522 0 73.305043-32.745739 73.305043-73.149217L904.199346 585.015652l63.488 0C1014.279346 585.015652 1036.91865 556.009739 1016.43865 533.882435z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'other':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M639.852388 316.278363c13.847379 13.721513 30.447453 24.726148 48.51597 32.16456 18.099217 7.440459 37.669948 11.316743 57.268308 11.316743s39.168068-3.876284 57.269331-11.316743c18.099217-7.439436 34.69622-18.443048 48.544623-32.16456 13.847379-13.723559 24.947182-30.167067 32.417317-48.140417 7.501858-17.942651 11.408841-37.356816 11.408841-56.768935 0-19.411095-3.906983-38.85596-11.408841-56.767911-7.470135-17.97335-18.568914-34.416857-32.417317-48.140417-13.848403-13.723559-30.446429-24.726148-48.544623-32.166607-18.10024-7.439436-37.670971-11.314697-57.269331-11.314697s-39.169091 3.876284-57.268308 11.314697c-18.068518 7.440459-34.668591 18.443048-48.51597 32.166607-13.847379 13.724583-24.945135 30.167067-32.448016 48.140417-7.502881 17.911952-11.378142 37.356816-11.378142 56.767911 0 19.412119 3.875261 38.826284 11.378142 56.768935C614.907253 286.111297 626.005009 302.554804 639.852388 316.278363zM851.451644 705.994296c-13.848403-13.723559-30.446429-24.695448-48.544623-32.132838-18.10024-7.441483-37.670971-11.316743-57.269331-11.316743s-39.169091 3.874237-57.268308 11.316743c-18.068518 7.438413-34.668591 18.409279-48.51597 32.132838-13.847379 13.754259-24.945135 30.199813-32.448016 48.142463s-11.378142 37.384445-11.378142 56.765865c0 19.445888 3.875261 38.856983 11.378142 56.799634s18.600637 34.418904 32.448016 48.110741c13.847379 13.754259 30.447453 24.75787 48.51597 32.197306 18.099217 7.441483 37.669948 11.255345 57.268308 11.255345s39.168068-3.813862 57.269331-11.255345c18.099217-7.439436 34.69622-18.442024 48.544623-32.197306 13.847379-13.691837 24.947182-30.167067 32.417317-48.110741 7.501858-17.942651 11.408841-37.353746 11.408841-56.799634 0-19.380396-3.906983-38.822191-11.408841-56.765865C876.397802 736.194108 865.299023 719.749578 851.451644 705.994296zM435.443905 361.259834c-20.192901-20.005636-44.388976-36.041868-70.771857-46.888913-26.414603-10.815323-54.954613-16.443507-83.495646-16.443507-28.570709 0-57.111742 5.628184-83.495646 16.443507-26.38288 10.847046-50.578955 26.883277-70.77288 46.888913-20.193925 20.039405-36.386722 44.045145-47.296189 70.210062-10.940167 26.163893-16.59905 54.454216-16.59905 82.775238 0 28.323069 5.65786 56.643068 16.59905 82.776262 10.910491 26.196639 27.102265 50.204425 47.296189 70.211085 20.193925 20.005636 44.388976 36.042891 70.77288 46.888913 26.383904 10.8143 54.923914 16.443507 83.495646 16.443507 28.541033 0 57.081043-5.629207 83.495646-16.443507 26.381857-10.847046 50.577932-26.883277 70.771857-46.888913 20.194948-20.007683 36.356023-44.01547 47.296189-70.211085 10.910491-26.133194 16.59905-54.453193 16.59905-82.776262 0-28.321022-5.688559-56.611346-16.59905-82.775238C471.799928 405.306003 455.638853 381.299239 435.443905 361.259834z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'user':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M510.75435967 60.92415401c124.84223522 0 226.04089844 99.54691694 226.04089845 222.32757406 0 122.80673682-101.1974217 222.35862116-226.04089845 222.35862115-124.83726783 0-226.03468951-99.55188432-226.03468952-222.35862115C284.71842862 160.44250575 385.95062322 60.92415401 510.75435967 60.92415401L510.75435967 60.92415401 510.75435967 60.92415401 510.75435967 60.92415401z"
            fill={getIconColor(color, 0, '#333333')}
          />
          <Path
            d="M412.66172541 566.0791761l198.67530764 0c170.05786636 0 307.89798146 112.45041042 307.89798146 279.7350821l0 19.51047983c0 65.92331776-137.86992064 97.74986642-307.89798146 97.74986642L412.66172541 963.07460445c-170.06283493 0-307.89798146-29.41723411-307.89798146-97.74986642l0-19.51047983C104.76622704 678.52958652 242.60013323 566.0791761 412.66172541 566.0791761L412.66172541 566.0791761 412.66172541 566.0791761 412.66172541 566.0791761z"
            fill={getIconColor(color, 1, '#333333')}
          />
        </Svg>
      );
    case 'circle':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M512 64C264.576 64 64 264.576 64 512c0 247.36 200.576 448 448 448s448-200.64 448-448c0-247.424-200.576-448-448-448z m0 832C299.936 896 128 724.032 128 512 128 299.904 299.936 128 512 128s384 171.904 384 384c0 212.032-171.936 384-384 384z"
            fill={getIconColor(color, 0, '#333333')}
          />
          <Path
            d="M512 512m-288 0a288 288 0 1 0 576 0 288 288 0 1 0-576 0Z"
            fill={getIconColor(color, 1, '#333333')}
          />
        </Svg>
      );
    case 'image':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M896 810.666667V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333zM362.666667 576l106.666666 128 149.333334-192 192 256H213.333333l149.333334-192z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'music':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M950.857143 128V768c0 80.566857-120.576 109.714286-182.857143 109.714286s-182.857143-29.147429-182.857143-109.714286 120.576-109.714286 182.857143-109.714286c37.705143 0 75.446857 6.838857 109.714286 22.272v-306.870857l-438.857143 135.424v405.138286c0 80.566857-120.576 109.714286-182.857143 109.714286s-182.857143-29.147429-182.857143-109.714286 120.576-109.714286 182.857143-109.714286c37.705143 0 75.446857 6.838857 109.714286 22.272V274.249143c0-23.990857 16.018286-45.129143 38.838857-52.553143l475.428571-146.285714c5.156571-1.718857 10.276571-2.304 16.018286-2.304a54.857143 54.857143 0 0 1 54.857143 54.857143z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );

  }

  return null;
};

Icon.defaultProps = {
  size: 18,
};

/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
const getIconColor = (color, index, defaultColor) => {
  return color
    ? (
      typeof color === 'string'
        ? color
        : color[index] || defaultColor
    )
    : defaultColor;
};

export default Icon;
