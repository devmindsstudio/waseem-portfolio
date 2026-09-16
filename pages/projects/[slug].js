import React from "react";
import { useRouter } from "next/router";
import Projects from "../../components/Projects";
import Head from "next/head";
import {
  SiRemix,
  SiPrisma,
  SiShopify,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiPhp,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiMysql, 
  SiGoogleanalytics,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAmazonaws,
} from "react-icons/si";

const JSON_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 464 511.863"
    width={35}
    height={35}
  >
    <path
      fill="#666"
      fillRule="nonzero"
      d="M231.822 132.778c1.2-5.152 6.352-8.357 11.505-7.158 5.153 1.2 8.357 6.352 7.158 11.505l-20.773 88.972c-1.199 5.153-6.352 8.358-11.504 7.158-5.153-1.199-8.358-6.352-7.158-11.505l20.772-88.972zm-32.519 71.317c3.972 3.477 4.377 9.521.9 13.493-3.478 3.973-9.521 4.377-13.494.9l-36.354-31.854c-3.972-3.477-4.377-9.521-.9-13.493.295-.336.606-.644.933-.927l36.321-31.826c3.973-3.478 10.016-3.073 13.494.899 3.477 3.973 3.072 10.016-.9 13.494l-28.14 24.656 28.14 24.658zm77.99 14.393c-3.972 3.477-10.016 3.073-13.493-.9-3.478-3.972-3.073-10.016.899-13.493l28.14-24.658-28.14-24.656c-3.972-3.478-4.377-9.521-.899-13.494 3.477-3.972 9.521-4.377 13.493-.899l36.318 31.826c.328.283.639.591.933.927 3.477 3.972 3.073 10.016-.899 13.493l-36.352 31.854z"
    />
    <path
      fillRule="nonzero"
      d="M90.232 0h230.505a7.998 7.998 0 016.39 3.183l96.876 104.809a7.937 7.937 0 012.118 5.411h.041v346.065c0 14.28-5.956 27.377-15.469 36.893l-.033.033c-9.515 9.513-22.613 15.469-36.893 15.469H90.232c-14.327 0-27.463-5.918-36.984-15.439l-.448-.487c-9.219-9.441-14.963-22.327-14.963-36.469V52.395c0-14.396 5.893-27.485 15.384-36.979l.033-.033C62.748 5.892 75.837 0 90.232 0zm240.235 30.272V81.11c.913 12.412 5.265 22.192 12.97 28.775 7.822 6.682 19.34 10.418 34.49 10.676v-.03h32.219v-4.052l-79.679-86.207zm79.679 106.253h-32.219v-.033h-.124c-19.111-.302-34.068-5.373-44.736-14.486-11.073-9.458-17.282-22.969-18.52-39.763l-.075-1.098V16.016H90.232c-10.01 0-19.108 4.091-25.705 10.674-6.583 6.596-10.673 15.694-10.673 25.705v407.073c0 9.782 3.961 18.706 10.324 25.264l.393.369c6.628 6.627 15.744 10.745 25.661 10.745h283.535c9.895 0 18.993-4.145 25.62-10.758 6.613-6.628 10.759-15.725 10.759-25.62V136.525z"
    />
    <path fill="red" d="M21.123 259.247h421.753c11.618 0 21.124 9.525 21.124 21.124v163.863c0 11.599-9.526 21.124-21.124 21.124H21.123C9.526 465.358 0 455.853 0 444.234V280.371c0-11.619 9.506-21.124 21.123-21.124z" />
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M82.178 404.762l-2.718-21.739h11.276c2.809 0 4.597-.385 5.367-1.155.77-.77 1.156-1.744 1.156-2.922v-37.363H85.982v-21.738h38.451v62.499c0 7.337-1.813 12.907-5.436 16.712-3.623 3.805-8.831 5.706-15.626 5.706H82.178zm53.462-1.494l3.805-22.418c8.332 2.083 15.826 3.123 22.483 3.123 6.661 0 12.025-.27 16.102-.815v-6.792l-12.228-1.087c-11.051-.998-18.635-3.647-22.759-7.95-4.121-4.302-6.181-10.665-6.181-19.089 0-11.593 2.514-19.565 7.54-23.911 5.029-4.35 13.565-6.523 25.611-6.523 12.047 0 22.916 1.133 32.611 3.398l-3.398 21.738c-8.424-1.359-15.172-2.039-20.244-2.039-5.073 0-9.376.226-12.908.68v6.657l9.783.952c11.864 1.178 20.062 4.008 24.591 8.492 4.53 4.484 6.794 10.71 6.794 18.682 0 5.706-.77 10.528-2.311 14.47-1.54 3.94-3.372 6.927-5.501 8.966-2.13 2.038-5.142 3.601-9.037 4.687-3.893 1.087-7.312 1.744-10.256 1.97-2.944.229-6.864.341-11.755.341-11.774 0-22.687-1.177-32.742-3.532zm80.771-40.896c0-15.491 2.897-26.789 8.696-33.9 5.796-7.112 16.258-10.666 31.386-10.666 15.125 0 25.587 3.554 31.383 10.666 5.797 7.111 8.693 18.409 8.693 33.9 0 7.697-.61 14.176-1.832 19.427-1.224 5.255-3.329 9.83-6.316 13.725-2.991 3.893-7.111 6.748-12.363 8.558-5.255 1.813-11.777 2.718-19.565 2.718-7.791 0-14.313-.905-19.565-2.718-5.254-1.81-9.375-4.665-12.366-8.558-2.987-3.895-5.094-8.47-6.316-13.725-1.224-5.251-1.835-11.73-1.835-19.427zm29.21-14.132v35.325H256.9c3.714 0 6.407-.429 8.083-1.29 1.675-.861 2.514-2.831 2.514-5.909v-35.325h-11.414c-3.623 0-6.272.429-7.947 1.29-1.676.861-2.515 2.831-2.515 5.909zM359 404.762L338.214 374.6c-.727-.999-1.178-3.172-1.359-6.522h-.545v36.684h-27.174v-84.917h25.545l20.786 30.161c.727.996 1.178 3.172 1.36 6.523h.544v-36.684h27.172v84.917H359z"
    />
  </svg>
);
const HIPAA_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" id="katman_1" version="1.1" viewBox="0 0 841.9 595.3" width={35} height={35}>
    <defs>
      <style jsx>{`
        .st0 {
          fill: #0091c2;
        }

        .st1 {
          fill: #fdfdfe;
        }
      `}</style>
    </defs>
    
    <path class="st0" d="M372.7,524.1c-31.5-.5-61.6-7.7-89.7-21.6-70.3-34.9-112.9-91.2-126.6-168.6-7.4-41.7-2.1-82.3,13.7-121.6.8-2,1.6-3.6,4.2-4.3,26.8-7.5,51.1-19.9,73.4-36.5,10.3-7.7,21.5-14.3,33.7-18.9,18.6-6.9,34.6-1.4,44.5,15.8,3.8,6.6,7,13.7,10,20.7,8.5,19.5,24.8,27.4,44.5,30.5.7,1,.4,2,.4,3.1,0,3.9,2,5.6,6,5.3,4.5-1,9.1-1.7,13.5-3,13.1-3.6,23.1-11.1,29-23.7,3.8-8.1,7.8-16,11.8-24,8.7-17,22.7-19.3,39.9-12.4,5,2,9.3,5.3,13.7,8.4,18.4,13.1,39.4,21.3,59.4,31.4,12.5,6.3,25.2,12.2,38.8,15.7.6.1,1.2.4,1.3,1.5-7.9,2.1-16,1.6-24,.7-12.7-1.4-25-5-37.1-8.8-.9-.3-2.1-1.4-3-.3-.9,1.2.2,2.3.9,3.3,4,5.1,9.3,8.4,14.8,11.6,1.4.8,2.9,1.6,4.2,3-19.4,2.3-36.4-6.3-54.7-12.2,2.2,4.4,5.7,6.5,8.5,9.4,2.8,3,6.5,5.1,9,9.3-8.6-.8-16.2-3.1-23.5-6.2-6.8-2.9-13.4-6.1-20.1-9.3-3.1-1.5-6.1-1.6-8.3,1.3-2.1,2.9.1,5.3,1.8,7.4,1.8,2.2,4.1,3.9,7.2,6.7h-21.1c9,8.1,10.8,17.8,9.1,28.5-1.8,11.2-7.1,20.1-16.3,26.8-8.7,6.3-18.1,11.5-27.7,16.5-3.4,1.8-6.9,3.4-10.3,5.2-1.8,1-4.4,1.6-4.4,4.2,0,2.3,2.5,2.9,4.3,3.7,6.8,3.3,13.1,7.4,18.1,13.3,4,4.7,6.4,10.1,7.5,16.1,1.3,7.3-.7,13.6-6,19-6.4,6.6-14.2,11.3-21.2,17-5.7,4.7-5.8,5.7-.2,10.4,6.9,5.8,12.9,12.3,17,20.4,3.5,6.9,3.6,13.8-.2,20.7-3.9,7.1-9.3,13-15.1,18.5-1.7,1.6-3.4,3.1-5,4.7-4,4.1-3.9,6.8.9,10.1,5.6,3.9,9.2,8.8,10,15.8.7,5.9-1.2,10.8-4.3,15.6-4.9,7.7-13.3,11.8-18.8,18.9-1.7,2.1-3.8,1.1-3.9-1.7-.1-4.3,1.4-8.1,3.9-11.6,2.3-3.2,4.9-6.3,7.1-9.7,4.5-6.7,3.9-10.9-1.6-16.8-3-3.2-7.6-4.9-9.5-9.2-1.1-.7-2-1.6-2.3-2.9,0-.4,0-.9,0-1.3.3-2.6.4-5.3,1.2-7.8,2-5.8,6.7-9.5,11.1-13.3,2.9-2.5,5.7-5.1,8.3-7.9,7-7.6,7.1-14.2.1-21.9-4.1-4.6-8.8-8.6-13.6-12.3-2.4-1.9-4.9-3.7-5.8-6.9-.3-1.6-1.1-2.9-1.6-4.4-.5-1.8-.5-3.7,0-5.5.3-1.1,1.1-2,1.5-3.1,1.3-3.8,4.1-6.3,7.4-8.5,6-4,12.3-7.6,17.4-12.8,8.3-8.3,7.3-17-2.2-24-4.9-3.5-10.8-5.2-15.6-8.8-3.1-2.2-5.8-4.6-6.9-8.3-.4-1.3-1.1-2.5-1.5-3.8-.5-1.9-.5-3.7,0-5.6.4-1.3,1.1-2.5,1.5-3.9,2-5.6,6.7-8.2,11.7-10.3,12.1-5,23.5-11.3,34.4-18.6,3.1-2.1,5.8-4.6,8.1-7.4,2.9-3.6,4.3-7.7,3-12.5-1.2-4.5-4.2-7.2-8.9-7.4-6.5-.4-12.1,1.8-16.1,7.2-2.8,3.7-4.6,8-7.3,11.7-6,8.1-16.1,8.8-22.7,1.6-1.3-1.4-2.2-2.9-2.4-4.8-.5-2.1,0-4.2.3-6.2.5-4.1,3.3-6.7,6.4-8.5,5-2.8,8.7-6.7,11.6-11.6,1.2-2,2.9-3.6,4.8-5.1-5.8.1-11.4,0-17,0-1.7,0-3.4-.3-4.8,1.1-1.5,5.5-.3,11.1-.7,16.7-.2,2.8.3,5.8-1,8.5-2,1.1-2.3-.8-3.1-1.8-1.4-1.8-2.6-4-4.6-5.1-6-3-9.7-8.2-13.7-13.4-11.1-14.3-36.6-15.3-49.1-2.4-2.4,2.5-4.2,5.4-4.7,8.8-2.3,15.7,1,29.4,14.4,39.4,11.4,8.5,24,15,36.6,21.4,2.9,1.5,7,2.3,6.9,6.5-.1,3.9-4.1,4.6-6.8,6.1-9.3,5.2-17.6,11.3-21.3,22-3.7,11.1-1.5,18.9,7.5,26.3,4.8,3.9,9.7,7.5,14.6,11.2,1.3,1,2.7,2,4,3.2,4.9,4.6,4.8,7.3-.4,11.6-6.5,5.3-12.1,11.4-16.2,18.7-4.2,7.5-4.2,15,.3,22.3,4.5,7.4,10.2,13.9,16.9,19.4,6.9,5.6,7.3,10.1,0,15.1-8.9,6.1-11.1,20-3.9,29,2.9,3.6,5.8,7.1,9.6,9.9,3.5,2.6,7.3,5.3,8.3,10-.9,1.3-2.1.9-3.3.5h0Z"/>
    <path class="st0" d="M377.4,212c-15.5-2.4-25.3-11.9-30.7-26-3.1-8.1-5.2-16.7-7.5-25.1-8.2-29.7-28.8-37.9-57.3-30.4-12.9,3.4-23.7,10.8-34.1,18.7-18.3,13.8-37.2,26.7-58.9,34.7-1.5.5-2.9,1.9-5.1.9,5.9-10.5,12.6-20.3,20.2-29.5,38.8-46.9,88.3-74.3,148.6-82.4,7.7-1,15.6-1.2,23.4-1.7,1.4,0,3.1-.6,4.4.7,1,10.4.5,20.8.3,31.2.2,4.1-1.8,7.7-2.9,11.5-1.4,4.6-3.2,9-4.4,13.6-1.2,4.3-3.8,5.8-8.1,5.7-7.7-.2-15.4,0-23.7,0,6.6,4.9,12.9,9.3,19.1,13.8,4.7,3.5,5.1,4.4,3.2,10.1-2.4,7.1-4.8,14.3-6.9,21.9,6.6-4.5,12.5-9.2,18.8-13.4,1.4-.9,3.6-4.1,5.3,0,0,14.2,0,28.3,0,42.5s.1,4.7-3.4,3.3h0Z"/>
    <path class="st0" d="M384,212.2c17.3-3.9,27.6-15.1,32.4-31.8,2.1-7.1,4-14.2,6.1-21.2,8.1-26.8,25.5-35.9,54.8-29.6,13.4,2.9,24.8,10.1,35.2,18.5,26.1,20.7,54.9,36,87.1,44.9,14.8,4.1,29.7,7.4,46.4,6-9.7,9-20,13.6-31.9,13.7-16.6.2-32-5.4-47.3-11.1-16.7-6.3-32.4-14.7-46.9-25.4-12.1-8.9-24.7-17.2-38.8-22.9-19.4-7.8-36-1.9-46.1,16.4-3.5,6.4-6.4,13.3-9.5,20-8.7,19-24.5,27.4-44.4,29.7,0-2.7-2.8-6.5,2.7-7.1h0Z"/>
    <path class="st0" d="M689.3,378.9c-5.1,0-10.3,0-15.4,0-1.4,0-1.9-.2-1.8-2.3.2-4.1-3.1-7.6-4.1-11.6-1.9-8-6.5-10.7-14.8-9.9-10,.9-10.1.2-13.7,9.7-.8,2.2-1.6,4.3-2.5,6.5-1.4,3.5-1.7,6.5,3.5,6.5-.1,1.8-1.4,1.3-2.1,1.3-6.6,0-13.2,0-19.8,0-2,0-2.8,0-3.5-3-1.6-6.8-5.2-13.1-8.1-19.5-.6-1.4-2-1.1-3.3-1.1-4.9,0-9.8,0-14.8,0-2.2,0-3.4.7-4.1,2.8-1.4,4.1-3.1,8-4.6,12-2.2,5.9-2,6.1,4.4,8.6h-20.5c8.8-.5,10-7.8,12.6-13.8,6.2-14.7,12.3-29.5,18.5-44.2.5-1.2.6-3.1,2.3-3.1,1.7,0,1.8,1.9,2.3,3.1,6.8,15.3,13.5,30.6,20.3,45.9,1.6,3.6,2.9,9.1,6.7,9.2,4.2,0,4.7-5.7,6.2-9.3,6.5-15.2,12.8-30.6,19.3-45.9.5-1.2.5-3.1,2.2-3.1,1.7,0,1.8,1.9,2.3,3.1,7.1,16,14.2,32,21.3,48,2.2,5,5,9.3,11.6,9.1-.1.4-.3.8-.4,1.2h0Z"/>
    <path class="st0" d="M384,212.2c-3.9,1.2-2.4,4.5-2.7,7.1-.1.8-.3,1.5-.3,2.3-.2,4.2,1.7,6.3,5.8,6.3-5.9,1.5-6.4,1.2-6.4-4.4,0-1.3,0-2.7,0-4-.2-2.8,1.7-6.4-3-7.5,3,.2,3-1.8,3-3.9,0-14.4,0-28.9,0-43.3-1.6-1.8-1.4-4-1.4-6.1,0-14.9,0-29.7,0-44.6,0-3.4,1.5-6.6.7-10,1.8-10.7.5-21.5.8-32.3,1.4,5.6.7,11.3.5,16.9-.3,8.3.9,16.1,3.9,23.9,2.1,5.4,3.8,11,5.4,16.7.7,2.6,2,3.3,4.6,3.3,9.5-.1,19,0,28.8.8-7.3,5.3-14.4,10.7-21.8,15.7-3.2,2.2-4,4.1-2.6,7.9,3.1,8.5,5.7,17.1,7.8,26.2-8.3-6-16.7-12-25.9-18.6v9.9c0,11.4,0,22.8,0,34.2,0,2.3.1,4.1,3.1,3.7h0Z"/>
    <path class="st0" d="M497.4,378.6h-20.4c5.6-1.4,4.9-5.9,4.9-10,0-6.2,0-12.3.2-18.5,0-2.7-.9-3.4-3.4-3.3-9.2.1-18.5.2-27.7,0-2.9,0-3.7,1-3.6,3.7.2,6,.2,12,.3,18,0,5.1,2.4,8.5,7,10.1h-19.4c4.8-1.1,5-4.8,5-8.5,0-14.9,0-29.8.1-44.8,0-4.4-2.7-5.6-6.1-6.8h18.2c-5.2,1.2-5,5.1-4.9,9.1,0,4.1,0,8.3-.2,12.5-.1,2.5.7,3.5,3.4,3.5,9.4-.1,18.8-.1,28.2,0,2.4,0,3.3-.8,3.2-3.2-.1-4.3-.2-8.6,0-12.9.2-4.5-.6-8.1-6.2-8.7h18.3c-5.5,1-5,5.2-5,9.2,0,13.4,0,26.8.1,40.2,0,7.9.2,7.9,8.1,10.6h0Z"/>
    <path class="st0" d="M547,351.2c1-1.5,2-1.2,2.9-1.3,9-1.1,13.4-6.4,12.7-15.3-.7-8.4-6.7-13.7-15-13.7-3,0-4,.9-4,4,.1,14.8,0,29.5,0,44.3,0,7.2.4,7.4,7,9.3h-19.3c5.3-1,5-5.2,5-9.1,0-14,0-28,.1-42,0-4.4-.3-8.3-6.3-7.7.2-.7.2-1.2.3-1.2,8,0,16-.5,24,.1,8.6.6,13.3,4.9,14.5,11.7,1.3,7.4-2.6,15.5-9.4,19-3.9,2-8,2.9-12.7,2h0Z"/>
    <path class="st0" d="M372.7,524.1c1-.2,2-.5,3-.7,2.9-4.6.8-8.6-1.6-12.4-2.4-3.7-5.5-7-7.8-10.8-4-6.6-3.8-11,1.3-16.7,3.9-4.4,8.8-7.9,12.9-12.1,1,.6,1.7,1.4,1.7,2.7-2.3.9-1.2,2.9-1.3,4.4,0,13,0,26,0,38.9s0,8.1-8.2,6.7h0Z"/>
    <path class="st0" d="M504.5,378.6c3.3-.9,4.3-3.2,4.5-6.3,1-15.5.4-31,.4-46.5,0-3.4-.8-6.7-5.3-7.1h17.2c-5.1,1.3-4.9,5.5-4.9,9.3,0,14.4-.3,28.9.3,43.3.2,5.1,2.9,6.4,7,7.3h-19.1Z"/>
    <path class="st0" d="M380.5,314.4c-1.9-7-7.4-10.3-13.5-12.8-11.4-4.8-22.2-10.4-32.4-17.3-3.8-2.6-7.5-5.4-10.3-9.1-4-5.3-4.4-12.3-1.1-17.3,2.7-4.1,8.4-5.7,15-4.1,5.9,1.4,10.1,4.9,13,10.2,2.1,3.9,4.1,7.9,7.3,11.1,5.2,5.1,13.4,5,18.1-.2,2.5-2.7,3.3-5.8,2.9-9.3,1.5-7.4.3-14.9.7-22.4.1-1.8-.6-3.7.8-5.3,1.6,1.7,1.5,3.9,1.5,6,0,6.9.2,13.8-.5,20.7v5.9c.8,8.3.5,16.7.5,25,0,5.3,0,10.6-.6,15.9-.5,1-1,2-1.6,3h0Z"/>
    <path class="st0" d="M380.6,389.2c-2.5-5.3-6.7-9-11.7-12-5.5-3.3-10.9-6.9-15.4-11.7-7.4-7.9-7.1-15.3.7-22.9,3.6-3.5,7.9-5.7,12.4-7.8,6.3-2.9,11.7-6.8,13.9-13.8.5,1,1,2,1.5,3,1,21,1.1,42.1,0,63.1,0,1-.7,1.6-1.5,2.1Z"/>
    <path class="st0" d="M380.6,470.5c.6-7.3-3.4-12.4-8.3-17.1-3.9-3.7-8.1-7-11.8-10.9-8-8.3-8.1-15.5-.8-24.3,4-4.9,8.9-8.8,14-12.6,3.4-2.6,6-5.7,7-9.9,1,1,1.6,2.2,1.7,3.6.9,20.9.9,41.9,0,62.8-.5,2.8-1.1,5.5-1.6,8.2h0Z"/>
    <path class="st1" d="M595.9,329c3,7.5,5.6,14.1,8.3,20.5,1,2.4.2,3-2.1,2.8-1.4,0-2.8,0-4.1,0-3.4-.2-8.4,1.6-9.8-.8-1.2-1.9,1.6-6.4,2.8-9.6,1.4-4,3-7.9,4.9-12.9h0Z"/>
    <path class="st1" d="M653,328.9c3.2,7.8,5.7,14.3,8.5,20.8.9,2.2.1,2.7-1.9,2.6-4.9,0-9.8,0-15.2,0,2.8-7.7,5.5-14.9,8.7-23.4h0Z"/>
  </svg>
);
const HasuraIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={35}
    height={35}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M2.122.001a.393.393 0 0 0-.336.139C.448 1.725.034 6.02.724 8.172A4.54 4.54 0 0 1 .88 10.38c-.133.73-.269 1.612-.269 2.222C.611 18.895 5.712 24 12.001 24c6.29 0 11.388-5.102 11.388-11.399 0-.613-.133-1.493-.27-2.222a4.54 4.54 0 0 1 .157-2.207c.69-2.15.276-6.447-1.062-8.032a.405.405 0 0 0-.649.05l-1.649 2.59a1.268 1.268 0 0 1-1.693.275A11.325 11.325 0 0 0 12 1.203c-2.297 0-4.435.682-6.223 1.852a1.27 1.27 0 0 1-1.693-.276L2.434.19a.41.41 0 0 0-.312-.189zM12 3.805a8.835 8.835 0 0 1 8.82 8.824c-.004 4.864-3.959 8.823-8.82 8.823-4.861 0-8.816-3.959-8.816-8.824a8.836 8.836 0 0 1 5.048-7.976A8.73 8.73 0 0 1 12 3.805zM9.566 8.732a.254.254 0 0 0-.219.127.253.253 0 0 0 .003.255l1.848 3.111-2.482 3.787a.257.257 0 0 0-.011.26.252.252 0 0 0 .222.134h1.859a.258.258 0 0 0 .213-.116l1.341-2.098 1.202 2.086a.251.251 0 0 0 .22.128h1.832a.247.247 0 0 0 .219-.128.234.234 0 0 0 .006-.255l-2.253-3.908-1.933-3.259a.251.251 0 0 0-.22-.124z"/>
  </svg>
);
const projectsMap = {
  zonzon: {
    logo: "zonzon",
    name: "Zonzon",
    websiteLink: "https://apps.apple.com/us/app/zonzon/id1483530000",
    image: {
      src: "/zonzon.png",
      alt: "Zonzon project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        Zonzon is a social networking application designed to <strong>connect people within micro-communities</strong> such as apartments, condos, and residential societies. It enables users to interact with neighbors, share updates, organize events, and access local services, creating a more engaged and supportive community environment.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      {
        name: "Hasura",
        icon: <HasuraIcon />
      },
      {
        name: "Firebase",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
            <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
            <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
            <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
          </svg>
        ),
      },

      {
        name: "Socket.io",
        icon: "devicon-socketio-original colored",
      }
    ],
    struggles: (
      <>
        A major challenge was building a <strong>real-time community interaction system</strong> that supports instant updates, notifications, and smooth communication between residents while maintaining scalability and performance across growing user bases.
      </>
    ),
    whatWouldIChange: (
      <>
        I would improve the <strong>modular architecture and notification system</strong> early on to better handle large-scale communities and ensure more efficient real-time event handling.
      </>
    ),
    futurePlans: (
      <>
        Future enhancements include adding <strong>AI-based interest matching</strong>, smarter community recommendations, enhanced event management features, and deeper integration with local service providers.
      </>
    ),
  },
  outbackmarketplace: {
    logo: "outbackmarket",
    name: "Outback Marketplace",
    websiteLink: "https://play.google.com/store/apps/details?id=com.app.outback",
    image: {
      src: "/outback_marketplace.png",
      alt: "Outback Marketplace project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        Outback Marketplace is a secure, user-friendly app that helps users buy, sell, and connect within their local community. It supports verified listings, geolocation-based access, and secure transactions. Users can create posts with photos and videos, manage listings easily, and interact through a local noticeboard where posts expire after seven days.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "AWS", icon: <SiAmazonaws size={35} color="#FF9900" /> },
      { name: "S3 Bucket", icon: "devicon-amazonwebservices-plain colored" },
    ],
    struggles: (
      <>
        Implementing secure phone verification, geolocation restrictions, and real-time transaction flows was challenging. Handling media uploads and maintaining performance across devices also required optimization.
      </>
    ),
    whatWouldIChange: (
      <>
        I would define a clearer architecture early for authentication, geolocation logic, and real-time transactions, along with reusable UI components and scalable state management.
      </>
    ),
    futurePlans: (
      <>
        Future improvements include enhanced safety features, better real-time messaging, improved payments, and more community-driven features.
      </>
    ),
  },
  icmixdesign: {
    logo: "icmixdesign",
    name: "IC Mix Design",
    websiteLink: "https://apps.apple.com/pk/app/ic-mix-design/id6448994001",
    image: {
      src: "/ic_mix_design.png",
      alt: "IC Mix Design project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        IC Mix Design simplifies concrete mix calculations for engineers, providing accurate results and efficient workflows for on-site and planning use.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      {
        name: "Firebase",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
            <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
            <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
            <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
          </svg>
        ),
      },
      { name: "Apple Pay", icon: "devicon-apple-original colored" },
    ],
    struggles: (
      <>
        Ensuring accurate real-time mix calculations while maintaining performance across devices and handling offline scenarios was a key challenge.
      </>
    ),
    whatWouldIChange: (
      <>
        I would design the calculation engine and data structure more carefully from the start to improve scalability and support multiple standards.
      </>
    ),
    futurePlans: (
      <>
        Future updates include advanced analytics, international standard support, offline improvements, and better UI/UX.
      </>
    ),
  },
  skillresy: {
    logo: "skillresy",
    name: "SkillResy",
    websiteLink: "https://apps.apple.com/my/app/skillresy/id6755155918",
    image: {
      src: "/skill_resy.png",
      alt: "SkillResy project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        SkillResy allows users to discover, book, and manage skill-based services with professionals through a seamless scheduling system.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "AWS", icon: <SiAmazonaws size={35} color="#FF9900" /> },
      { name: "S3 Bucket", icon: "devicon-amazonwebservices-plain colored" },
    ],
    struggles: (
      <>
        Managing real-time booking availability, scheduling conflicts, and notification synchronization was complex.
      </>
    ),
    whatWouldIChange: (
      <>
        I would design the booking system and state management more robustly early in development.
      </>
    ),
    futurePlans: (
      <>
        Future plans include better search, payment integration, and improved notifications and performance.
      </>
    ),
  },
  reuniteme: {
    logo: "reuniteme",
    name: "reUNITEme",
    websiteLink: "https://apps.apple.com/us/app/reuniteme/id6544793122",
    image: {
      src: "/re_unite_me.png",
      alt: "reUNITEme project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        reUNITEme helps reconnect missing individuals with families through secure community reporting and awareness sharing.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "HIPAA Compliance", icon: HIPAA_SVG }
    ],
    struggles: (
      <>
        Handling sensitive data securely while supporting real-time updates and media uploads was challenging.
      </>
    ),
    whatWouldIChange: (
      <>
        I would improve security architecture and data flow design early in the project.
      </>
    ),
    futurePlans: (
      <>
        Future updates include AI-based matching, better alerts, and improved location tracking.
      </>
    ),
  },
  eosvolt: {
    logo: "eosvolt",
    name: "EosVolt",
    websiteLink: "https://apps.apple.com/pk/app/eosvolt/id6467691034",
    image: {
      src: "/eosvolt.png",
      alt: "EosVolt project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        EosVolt helps users track and manage energy usage with real-time monitoring and analytics.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "AWS", icon: <SiAmazonaws size={35} color="#FF9900" /> },
      { name: "S3 Bucket", icon: "devicon-amazonwebservices-plain colored" },
    ],
    struggles: (
      <>
        Ensuring real-time energy data accuracy and synchronization across devices required careful optimization.
      </>
    ),
    whatWouldIChange: (
      <>
        I would design a scalable analytics pipeline earlier in the project.
      </>
    ),
    futurePlans: (
      <>
        Future improvements include predictive analytics, smart device integration, and better dashboards.
      </>
    ),
  },
  kurira: {
    logo: "kurira",
    name: "Kurira",
    websiteLink: "https://apps.apple.com/pk/app/kurira/id1643459023",
    image: {
      src: "/kurira.png",
      alt: "Kurira project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        Kurira is a mobile application focused on <strong>on-demand delivery and logistics services</strong>, allowing users to send and receive packages quickly and efficiently. The app streamlines the delivery process with real-time tracking, order management, and a user-friendly interface for both customers and drivers.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },

      {
        name: "Firebase",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
            <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
            <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
            <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
          </svg>
        ),
      },
      {
        name: "Google Maps API",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"/>
            <path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"/>
            <path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"/>
            <path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3L19.83,14.92z"/>
            <path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"/>
          </svg>
        ),
      },
    ],
    struggles: (
      <>
        One of the main challenges was implementing <strong>real-time location tracking and delivery updates</strong> while ensuring accuracy and low latency. Managing driver-customer interactions and optimizing route handling required careful backend and API design.
      </>
    ),
    whatWouldIChange: (
      <>
        I would improve the <strong>scalability of the real-time tracking system</strong> and introduce a more modular architecture to better handle growing user demand and delivery volume.
      </>
    ),
    futurePlans: (
      <>
        Future plans include adding <strong>AI-based route optimization</strong>, enhanced delivery analytics, multi-city expansion support, and improved in-app communication features between users and drivers.
      </>
    ),
  },
  xpdriver: {
    logo: "xpdriver",
    name: "XP Driver",
    websiteLink: "https://apps.apple.com/us/app/xp-driver/id1439220195",
    image: {
      src: "/xp_driver.png",
      alt: "XP Driver project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        XP Driver is a driver-focused application that enables users to register their vehicle and become a <strong>pickup and delivery driver</strong> on flexible terms. The app empowers drivers to earn high commissions while choosing their own working hours, utilizing real-time GPS tracking to optimize delivery routes and track job progress efficiently.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Firebase", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
            <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
            <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
            <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
          </svg>
        )
      },
      { name: "GPS Tracking", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"/>
            <path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"/>
            <path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"/>
            <path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3L19.83,14.92z"/>
            <path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"/>
          </svg>
        )
      },
      { name: "Real-time Updates", icon: "devicon-socketio-original colored" }
    ],
    struggles: (
      <>
        Building accurate GPS tracking with real-time location updates while maintaining battery efficiency and ensuring reliable background location services across different devices was challenging. Additionally, handling real-time order notifications and driver availability management required robust backend infrastructure.
      </>
    ),
    whatWouldIChange: (
      <>
        I would design a more efficient background location tracking system from the start and implement better rate-limiting strategies for real-time updates to optimize battery consumption.
      </>
    ),
    futurePlans: (
      <>
        Future improvements include advanced route optimization algorithms, enhanced earnings analytics, driver safety features, and integration with more delivery platforms for expanded opportunities.
      </>
    ),
  },
  xpeats: {
    logo: "xpeats",
    name: "XP Eats",
    websiteLink: "https://apps.apple.com/us/app/xp-eats/id1498829228",
    image: {
      src: "/xp_eats.png",
      alt: "XP Eats project image",
      width: 1150,
      height: 821,
    },
    description: (
      <>
        XP Eats is a mobile meal delivery application designed to <strong>combat food insecurity</strong> by connecting users with free meals from food banks and discounted meals from local restaurants and food suppliers. The app features real-time verification of meal preparation and delivery, along with a unique <strong>share and earn loyalty program</strong> that rewards users for inviting others.
      </>
    ),
    technologies: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Firebase", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35" height="35">
            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"/>
            <path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"/>
            <path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"/>
            <path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743c-0.609,0.342-1.352,0.342-1.961,0L8,37z"/>
          </svg>
        )
      },
      { name: "Apple Wallet", icon: "devicon-apple-original colored" },
      { name: "Real-time Delivery", icon: "devicon-socketio-original colored" }
    ],
    struggles: (
      <>
        Implementing a reliable meal verification system while managing real-time delivery tracking was complex. Additionally, building a loyalty point system that tracks user shares and rewards accurately, along with handling multiple restaurant integrations, required careful backend coordination.
      </>
    ),
    whatWouldIChange: (
      <>
        I would implement a more scalable payment and loyalty system early in development, and design clearer integration protocols with food suppliers to streamline the onboarding process.
      </>
    ),
    futurePlans: (
      <>
        Future enhancements include expanded food bank partnerships, AI-powered meal recommendations based on user preferences, advanced donation tracking, and integration with government nutrition assistance programs.
      </>
    ),
  }
};

const projectSlugs = [
  "zonzon",
  "outbackmarketplace",
  "icmixdesign",
  "skillresy",
  "reuniteme",
  "eosvolt",
  "kurira",
  "xpdriver",
  "xpeats"
];

export default function DynamicProjectPage() {
  const router = useRouter();

  if (!router.isReady) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Loading Project...</h1>
      </div>
    );
  }

  const currentSlug = router.query.slug;
  const currentIndex = projectSlugs.indexOf(currentSlug);
  const projectData = projectsMap[currentSlug];

  if (!projectData) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>404 | Project Not Found</h1>
        <p>The project '{currentSlug}' could not be loaded.</p>
      </div>
    );
  }

  const isFirstProject = currentIndex === 0;
  const isLastProject = currentIndex === projectSlugs.length - 1;

  // Get adjacent project data for preloading
  const nextSlug = !isLastProject ? projectSlugs[currentIndex + 1] : null;
  const prevSlug = !isFirstProject ? projectSlugs[currentIndex - 1] : null;
  const nextProjectData = nextSlug ? projectsMap[nextSlug] : null;
  const prevProjectData = prevSlug ? projectsMap[prevSlug] : null;

  const handleBack = () => {
    if (isFirstProject) {
      router.push("/");
    } else if (currentIndex > 0) {
      router.push(`/projects/${projectSlugs[currentIndex - 1]}`);
    }
  };

  const handleForward = () => {
    if (currentIndex >= 0 && currentIndex < projectSlugs.length - 1) {
      router.push(`/projects/${projectSlugs[currentIndex + 1]}`);
    } else if (isLastProject) {
      router.push("/archive");
    }
  };

  // Prefetch adjacent routes on navigation button hover
  const handlePrefetchNext = () => {
    if (nextSlug) router.prefetch(`/projects/${nextSlug}`);
  };

  const handlePrefetchPrev = () => {
    if (prevSlug) router.prefetch(`/projects/${prevSlug}`);
    else router.prefetch("/");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{projectData.name ?? "Waseem Khan | Senior Mobile Application Developer"}</title>

        {/* Preload next project image so it's ready before user clicks */}
        {nextProjectData && (
          <link rel="preload" as="image" href={nextProjectData.image.src} />
        )}
        {/* Preload previous project image */}
        {prevProjectData && (
          <link rel="preload" as="image" href={prevProjectData.image.src} />
        )}
      </Head>
      <Projects
        projectData={projectData}
        handleBack={handleBack}
        handleForward={handleForward}
        isFirstProject={isFirstProject}
        isLastProject={isLastProject}
        onMouseEnterBack={handlePrefetchPrev}
        onMouseEnterForward={handlePrefetchNext}
      />
    </>
  );
}