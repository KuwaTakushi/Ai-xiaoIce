"use client"
/* eslint-disable @next/next/no-img-element */
import { Card, Chip, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const IconA = () => {
	return (
<svg width="100px" height="100px" viewBox="0 0 52 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>icon-全部应用</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <filter x="-50.0%" y="-250.0%" width="200.0%" height="600.0%" filterUnits="objectBoundingBox" id="filter-1">
            <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="97.3522754%" x2="50%" y2="2.33697616%" id="linearGradient-2">
            <stop stop-color="#18A5FF" offset="0%"></stop>
            <stop stop-color="#57BDFF" offset="100%"></stop>
        </linearGradient>
        <path d="M10.2555408,-4.14336123e-16 L23.7444592,4.14336123e-16 C27.3105342,-2.4074122e-16 28.6036791,0.371302445 29.9073828,1.06853082 C31.2110865,1.76575919 32.2342408,2.78891348 32.9314692,4.09261719 C33.6286976,5.39632089 34,6.68946584 34,10.2555408 L34,23.7444592 C34,27.3105342 33.6286976,28.6036791 32.9314692,29.9073828 C32.2342408,31.2110865 31.2110865,32.2342408 29.9073828,32.9314692 C28.6036791,33.6286976 27.3105342,34 23.7444592,34 L10.2555408,34 C6.68946584,34 5.39632089,33.6286976 4.09261719,32.9314692 C2.78891348,32.2342408 1.76575919,31.2110865 1.06853082,29.9073828 C0.371302445,28.6036791 1.60494146e-16,27.3105342 -2.76224082e-16,23.7444592 L2.76224082e-16,10.2555408 C-1.60494146e-16,6.68946584 0.371302445,5.39632089 1.06853082,4.09261719 C1.76575919,2.78891348 2.78891348,1.76575919 4.09261719,1.06853082 C5.39632089,0.371302445 6.68946584,2.4074122e-16 10.2555408,-4.14336123e-16 Z" id="path-3"></path>
        <filter x="-8.8%" y="-8.8%" width="117.6%" height="117.6%" filterUnits="objectBoundingBox" id="filter-5">
            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.3 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
            <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
            <feOffset dx="0" dy="-1" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
            <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.2 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
        </filter>
        <filter x="-5.4%" y="-6.1%" width="110.7%" height="112.0%" filterUnits="objectBoundingBox" id="filter-6">
            <feGaussianBlur stdDeviation="0.5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stop-color="#6DCAFF" offset="0%"></stop>
            <stop stop-color="#49ABFF" offset="100%"></stop>
        </linearGradient>
        <path d="M10,4 L10.9815923,4 C12.6333945,4 13.3018396,4.18565122 13.9536914,4.53426541 C14.6055433,4.88287959 15.1171204,5.39445674 15.4657346,6.04630859 C15.8143488,6.69816044 16,7.36660547 16,9.01840766 L16,13.4361148 C16,14.3276335 15.9071744,14.6509198 15.7328673,14.9768457 C15.5585602,15.3027716 15.3027716,15.5585602 14.9768457,15.7328673 C14.6509198,15.9071744 14.3276335,16 13.4361148,16 L9.01840766,16 C7.36660547,16 6.69816044,15.8143488 6.04630859,15.4657346 C5.39445674,15.1171204 4.88287959,14.6055433 4.53426541,13.9536914 C4.18565122,13.3018396 4,12.6333945 4,10.9815923 L4,10 C4,6.6862915 6.6862915,4 10,4 Z" id="path-8"></path>
        <filter x="-58.3%" y="-41.7%" width="216.7%" height="216.7%" filterUnits="objectBoundingBox" id="filter-9">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.560784314   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-54.2%" y="-37.5%" width="208.3%" height="208.3%" filterUnits="objectBoundingBox" id="filter-10">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <path d="M23.0184077,4 L24,4 C27.3137085,4 30,6.6862915 30,10 L30,10.9815923 C30,12.6333945 29.8143488,13.3018396 29.4657346,13.9536914 C29.1171204,14.6055433 28.6055433,15.1171204 27.9536914,15.4657346 C27.3018396,15.8143488 26.6333945,16 24.9815923,16 L20.5638852,16 C19.6723665,16 19.3490802,15.9071744 19.0231543,15.7328673 C18.6972284,15.5585602 18.4414398,15.3027716 18.2671327,14.9768457 C18.0928256,14.6509198 18,14.3276335 18,13.4361148 L18,9.01840766 C18,7.36660547 18.1856512,6.69816044 18.5342654,6.04630859 C18.8828796,5.39445674 19.3944567,4.88287959 20.0463086,4.53426541 C20.6981604,4.18565122 21.3666055,4 23.0184077,4 Z" id="path-11"></path>
        <filter x="-58.3%" y="-41.7%" width="216.7%" height="216.7%" filterUnits="objectBoundingBox" id="filter-12">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.560784314   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-54.2%" y="-37.5%" width="208.3%" height="208.3%" filterUnits="objectBoundingBox" id="filter-13">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <path d="M9.01840766,18 L13.4361148,18 C14.3276335,18 14.6509198,18.0928256 14.9768457,18.2671327 C15.3027716,18.4414398 15.5585602,18.6972284 15.7328673,19.0231543 C15.9071744,19.3490802 16,19.6723665 16,20.5638852 L16,24.9815923 C16,26.6333945 15.8143488,27.3018396 15.4657346,27.9536914 C15.1171204,28.6055433 14.6055433,29.1171204 13.9536914,29.4657346 C13.3018396,29.8143488 12.6333945,30 10.9815923,30 L10,30 C6.6862915,30 4,27.3137085 4,24 L4,23.0184077 C4,21.3666055 4.18565122,20.6981604 4.53426541,20.0463086 C4.88287959,19.3944567 5.39445674,18.8828796 6.04630859,18.5342654 C6.69816044,18.1856512 7.36660547,18 9.01840766,18 Z" id="path-14"></path>
        <filter x="-58.3%" y="-41.7%" width="216.7%" height="216.7%" filterUnits="objectBoundingBox" id="filter-15">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.560784314   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-54.2%" y="-37.5%" width="208.3%" height="208.3%" filterUnits="objectBoundingBox" id="filter-16">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <path d="M20.5638852,18 L24.9815923,18 C26.6333945,18 27.3018396,18.1856512 27.9536914,18.5342654 C28.6055433,18.8828796 29.1171204,19.3944567 29.4657346,20.0463086 C29.8143488,20.6981604 30,21.3666055 30,23.0184077 L30,24 C30,27.3137085 27.3137085,30 24,30 L23.0184077,30 C21.3666055,30 20.6981604,29.8143488 20.0463086,29.4657346 C19.3944567,29.1171204 18.8828796,28.6055433 18.5342654,27.9536914 C18.1856512,27.3018396 18,26.6333945 18,24.9815923 L18,20.5638852 C18,19.6723665 18.0928256,19.3490802 18.2671327,19.0231543 C18.4414398,18.6972284 18.6972284,18.4414398 19.0231543,18.2671327 C19.3490802,18.0928256 19.6723665,18 20.5638852,18 Z" id="path-17"></path>
        <filter x="-58.3%" y="-41.7%" width="216.7%" height="216.7%" filterUnits="objectBoundingBox" id="filter-18">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.560784314   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-54.2%" y="-37.5%" width="208.3%" height="208.3%" filterUnits="objectBoundingBox" id="filter-19">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon-主功能" transform="translate(-854.000000, -765.000000)">
            <g id="icon-全部应用" transform="translate(854.000000, 762.000000)">
                <g transform="translate(9.000000, 3.000000)">
                    <ellipse id="阴影" fill="#008BE3" opacity="0.4" filter="url(#filter-1)" cx="17" cy="39" rx="15" ry="3"></ellipse>
                    <g>
                        <g id="分组-3">
                            <mask id="mask-4" fill="white">
                                <use xlinkHref="#path-3"></use>
                            </mask>
                            <g id="矩形">
                                <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlinkHref="#path-3"></use>
                                <use fill="black" fillOpacity="1" filter="url(#filter-5)" xlinkHref="#path-3"></use>
                            </g>
                            <path d="M5.49227985,30.3287458 L15.473333,23.5558883 C16.056847,23.1599324 16.2955461,23.0575765 16.5780862,22.990237 C16.8606263,22.9228976 17.1393737,22.9228976 17.4219138,22.990237 C17.7044539,23.0575765 17.943153,23.1599324 18.526667,23.5558883 L28.5077201,30.3287458 C29.5055934,31.0058741 29.8255057,31.2978341 30.1343923,31.6756343 C30.4432789,32.0534346 30.6596808,32.4617993 30.7988611,32.9295309 C30.9380414,33.3972624 31,33.825918 31,35.0318425 L31,43.3941999 C31,45.1772373 30.8143488,45.8238098 30.4657346,46.4756617 C30.1171204,47.1275135 29.6055433,47.6390907 28.9536914,47.9877049 C28.3018396,48.336319 27.6552671,48.5219703 25.8722296,48.5219703 L8.1277704,48.5219703 C6.34473292,48.5219703 5.69816044,48.336319 5.04630859,47.9877049 C4.39445674,47.6390907 3.88287959,47.1275135 3.53426541,46.4756617 C3.18565122,45.8238098 3,45.1772373 3,43.3941999 L3,35.0318425 C3,33.825918 3.06195862,33.3972624 3.20113889,32.9295309 C3.34031916,32.4617993 3.55672109,32.0534346 3.8656077,31.6756343 C4.17449432,31.2978341 4.49440657,31.0058741 5.49227985,30.3287458 Z" id="矩形" fill="#FFFFFF" opacity="0.3" filter="url(#filter-6)" mask="url(#mask-4)"></path>
                        </g>
                        <g id="矩形">
                            <use fill="black" fillOpacity="1" filter="url(#filter-9)" xlinkHref="#path-8"></use>
                            <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-8"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-10)" xlinkHref="#path-8"></use>
                        </g>
                        <g id="矩形">
                            <use fill="black" fillOpacity="1" filter="url(#filter-12)" xlinkHref="#path-11"></use>
                            <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-11"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-13)" xlinkHref="#path-11"></use>
                        </g>
                        <g id="矩形">
                            <use fill="black" fillOpacity="1" filter="url(#filter-15)" xlinkHref="#path-14"></use>
                            <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-14"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-16)" xlinkHref="#path-14"></use>
                        </g>
                        <g id="矩形">
                            <use fill="black" fillOpacity="1" filter="url(#filter-18)" xlinkHref="#path-17"></use>
                            <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-17"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-19)" xlinkHref="#path-17"></use>
                        </g>
                    </g>
                </g>
                <polygon id="矩形" opacity="0.362165179" points="0 0 52 0 52 52 0 52"></polygon>
            </g>
        </g>
    </g>
</svg>
	);
}

const IconB = () => {
	return (
<svg width="52px" height="53px" viewBox="0 0 52 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs>
        <filter x="-50.0%" y="-250.0%" width="200.0%" height="600.0%" filterUnits="objectBoundingBox" id="filter-1">
            <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="99.3803443%" x2="50%" y2="2.33697616%" id="linearGradient-2">
            <stop stop-color="#874BFF" offset="0%"></stop>
            <stop stop-color="#AF62FF" offset="100%"></stop>
        </linearGradient>
        <circle id="path-3" cx="19" cy="19" r="18.5"></circle>
        <filter x="-6.8%" y="-6.8%" width="113.5%" height="113.5%" filterUnits="objectBoundingBox" id="filter-5">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.6 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
            <feOffset dx="0" dy="-1" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
            <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.3 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
        </filter>
        <filter x="-3.9%" y="-5.8%" width="107.9%" height="111.6%" filterUnits="objectBoundingBox" id="filter-6">
            <feGaussianBlur stdDeviation="0.5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="3.52447036%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stop-color="#BD86FF" offset="0%"></stop>
            <stop stop-color="#9560FF" offset="100%"></stop>
        </linearGradient>
        <path d="M29.9558243,21.6909989 C29.294438,21.1782338 28.931546,20.3820813 28.984044,19.5589998 C28.9973561,19.3769999 28.9973561,19.1819999 28.9973561,19 C28.9973561,18.8180001 28.9973561,18.6230002 28.984044,18.4410002 C28.931546,17.6179187 29.294438,16.8217662 29.9558243,16.3090011 L31.020789,15.4510015 C31.5155918,15.0438753 31.6441352,14.3507311 31.3269664,13.8000022 L29.7827676,11.2000033 C29.5428226,10.7973603 29.1016632,10.549764 28.6246185,10.5500036 C28.4644364,10.5474725 28.3055599,10.578503 28.1586964,10.6410035 L26.8541146,11.1090033 C26.557286,11.2225382 26.2410495,11.2798911 25.9222706,11.2780033 C25.4121217,11.2767122 24.913093,11.132318 24.4845682,10.8620034 C24.1716319,10.6508716 23.8422632,10.4639683 23.4994758,10.3030037 C22.741705,9.93514549 22.2115712,9.23358088 22.0750856,8.41800446 L21.8487806,7.09200502 C21.7440721,6.46113465 21.1853292,5.99816339 20.5308868,6.00000548 L17.4691132,6.00000548 C16.8146708,5.99816339 16.2559279,6.46113465 16.1512194,7.09200502 L15.9249144,8.41800446 C15.7783428,9.22939311 15.2512232,9.92696874 14.5005242,10.3030037 C14.1577368,10.4639683 13.8283681,10.6508716 13.5154318,10.8620034 C13.086907,11.132318 12.5878783,11.2767122 12.0777294,11.2780033 C11.7589505,11.2798911 11.442714,11.2225382 11.1458854,11.1090033 L9.84130358,10.6410035 C9.6944401,10.578503 9.53556355,10.5474725 9.37538154,10.5500036 C8.89789828,10.5481524 8.45597218,10.796179 8.21723243,11.2000033 L6.67303363,13.8000022 C6.3558648,14.3507311 6.48440819,15.0438753 6.97921097,15.4510015 L8.04417565,16.3090011 C8.70046831,16.8256063 9.06212311,17.6190446 9.01595595,18.4410002 C9.00264388,18.6230001 9.00264388,18.8180001 9.00264388,19 C9.00264388,19.1819999 9.00264388,19.3769998 9.01595595,19.5589998 C9.06212311,20.3809554 8.70046831,21.1743937 8.04417565,21.6909989 L6.97921097,22.5489985 C6.48440819,22.9561247 6.3558648,23.6492689 6.67303363,24.1999978 L8.21723243,26.7999967 C8.45597218,27.203821 8.89789828,27.4518476 9.37538154,27.4499964 C9.53556355,27.4525275 9.6944401,27.421497 9.84130358,27.3589965 L11.1458854,26.8909967 C11.442714,26.7774618 11.7589505,26.7201089 12.0777294,26.7219967 C12.5878783,26.7232878 13.086907,26.867682 13.5154318,27.1379966 C13.8283681,27.3491284 14.1577368,27.5360317 14.5005242,27.6969963 C15.2512232,28.0730313 15.7783428,28.7706069 15.9249144,29.5819955 L16.1512194,30.907995 C16.2559279,31.5388654 16.8146708,32.0018366 17.4691132,31.9999945 L20.5308868,31.9999945 C21.1853292,32.0018366 21.7440721,31.5388654 21.8487806,30.907995 L22.0750856,29.5819955 C22.2115712,28.7664191 22.741705,28.0648545 23.4994758,27.6969963 C23.8422632,27.5360317 24.1716319,27.3491284 24.4845682,27.1379966 C24.913093,26.867682 25.4121217,26.7232878 25.9222706,26.7219967 C26.2410495,26.7201089 26.557286,26.7774618 26.8541146,26.8909967 L28.1586964,27.3589965 C28.3055599,27.421497 28.4644364,27.4525275 28.6246185,27.4499964 C29.1016632,27.450236 29.5428226,27.2026397 29.7827676,26.7999967 L31.3269664,24.1999978 C31.6441352,23.6492689 31.5155918,22.9561247 31.020789,22.5489985 L29.9558243,21.6909989 Z M19,26.149997 C14.9581152,26.1428204 11.6867881,22.9384868 11.6916851,18.9913491 C11.6965821,15.0442114 14.9758505,11.8476283 19.0177413,11.8500161 C23.0596321,11.852404 26.3349377,15.0528594 26.3349444,19 C26.3349476,20.8985516 25.5617364,22.7191542 24.1857835,24.0604131 C22.8098306,25.401672 20.9441231,26.1534489 19,26.149997 Z M19,16.4000011 C17.5295906,16.4000011 16.3375883,17.5640603 16.3375883,19 C16.3375883,20.4359397 17.5295906,21.5999989 19,21.5999989 C20.4704094,21.5999989 21.6624117,20.4359397 21.6624117,19 C21.6624117,17.5640603 20.4704094,16.4000011 19,16.4000011 Z" id="path-8"></path>
        <filter x="-28.0%" y="-19.2%" width="156.0%" height="153.8%" filterUnits="objectBoundingBox" id="filter-9">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.515164668   0 0 0 0 0.272747001   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-26.0%" y="-17.3%" width="152.0%" height="150.0%" filterUnits="objectBoundingBox" id="filter-10">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="1.19897038%" x2="50%" y2="100%" id="linearGradient-11">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E5D8FF" offset="100%"></stop>
        </linearGradient>
        <circle id="path-12" cx="19" cy="19" r="3"></circle>
        <filter x="-91.7%" y="-75.0%" width="350.0%" height="350.0%" filterUnits="objectBoundingBox" id="filter-13">
            <feOffset dx="2" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.542324285   0 0 0 0 0.313486427   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-50.0%" y="-33.3%" width="266.7%" height="266.7%" filterUnits="objectBoundingBox" id="filter-14">
            <feGaussianBlur stdDeviation="0.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon-主功能" transform="translate(-374.000000, -459.000000)">
            <g id="icon-领料/退料" transform="translate(374.000000, 458.000000)">
                <ellipse id="阴影" fill="#7733FF" opacity="0.55" filter="url(#filter-1)" cx="26" cy="39" rx="15" ry="3"></ellipse>
                <g id="分组-9" transform="translate(7.000000, 1.000000)">
                    <mask id="mask-4" fill="white">
                        <use xlinkHref="#path-3"></use>
                    </mask>
                    <g id="椭圆形">
                        <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlinkHref="#path-3"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-5)" xlinkHref="#path-3"></use>
                    </g>
                    <path d="M3.05431336,34.4927791 L17.7145258,27.1626729 C18.2343217,26.9027749 18.4304033,26.8355904 18.6600212,26.79139 C18.8896391,26.7471897 19.1103609,26.7471897 19.3399788,26.79139 C19.5695967,26.8355904 19.7656783,26.9027749 20.2854742,27.1626729 L34.9456866,34.4927791 C36.134909,35.0873902 36.5255135,35.3756978 36.9060937,35.7653686 C37.2866739,36.1550394 37.5601505,36.5975338 37.738482,37.1122012 C37.9168135,37.6268686 38,38.1051709 38,39.4347619 L38,47.3941999 C38,49.1772373 37.8143488,49.8238098 37.4657346,50.4756617 C37.1171204,51.1275135 36.6055433,51.6390907 35.9536914,51.9877049 C35.3018396,52.336319 34.6552671,52.5219703 32.8722296,52.5219703 L5.1277704,52.5219703 C3.34473292,52.5219703 2.69816044,52.336319 2.04630859,51.9877049 C1.39445674,51.6390907 0.882879593,51.1275135 0.534265408,50.4756617 C0.185651222,49.8238098 4.54827598e-13,49.1772373 4.54609239e-13,47.3941999 L4.5353053e-13,39.4347619 C4.53367702e-13,38.1051709 0.0831864713,37.6268686 0.261517998,37.1122012 C0.439849525,36.5975338 0.713326107,36.1550394 1.09390633,35.7653686 C1.47448655,35.3756978 1.86509104,35.0873902 3.05431336,34.4927791 Z" id="矩形" fill="#FFFFFF" opacity="0.2" filter="url(#filter-6)" mask="url(#mask-4)"></path>
                    <g id="形状" mask="url(#mask-4)">
                        <use fill="black" fillOpacity="1" filter="url(#filter-9)" xlinkHref="#path-8"></use>
                        <use fill="url(#linearGradient-7)" fill-rule="evenodd" xlinkHref="#path-8"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-10)" xlinkHref="#path-8"></use>
                    </g>
                    <g id="椭圆形" mask="url(#mask-4)">
                        <use fill="black" fillOpacity="1" filter="url(#filter-13)" xlinkHref="#path-12"></use>
                        <use fill="url(#linearGradient-11)" fill-rule="evenodd" xlinkHref="#path-12"></use>
                        <use fill="black" fillOpacity="1" filter="url(#filter-14)" xlinkHref="#path-12"></use>
                    </g>
                </g>
                <polygon id="矩形" opacity="0.362165179" points="0 0 52 0 52 52 0 52"></polygon>
            </g>
        </g>
    </g>
</svg>
	);
}

const IconC = () => {
	return (
		<svg width="52px" height="55px" viewBox="0 0 52 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <desc>Created with Sketch.</desc>
    <defs>
        <filter x="-50.0%" y="-250.0%" width="200.0%" height="600.0%" filterUnits="objectBoundingBox" id="filter-1">
            <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="98.0602685%" x2="50%" y2="2.33697616%" id="linearGradient-2">
            <stop stop-color="#687BFD" offset="0%"></stop>
            <stop stop-color="#89A2FF" offset="100%"></stop>
        </linearGradient>
        <path d="M3.57610096,4.21603782 L13.9077656,0.499108519 C14.7993571,0.178348726 15.1111646,0.0954350239 15.472319,0.0408938162 C15.8334734,-0.0136473915 16.1711917,-0.0136316317 16.532341,0.0409432826 C16.8934903,0.095518197 17.20529,0.178461 18.0968516,0.499304005 L28.4243159,4.21581086 C29.7809927,4.7040332 30.2367419,4.97968033 30.6844365,5.37137923 C31.1321311,5.76307813 31.461022,6.23097391 31.6779892,6.78485449 C31.8949564,7.33873506 32,7.86089833 32,9.30274892 L32,22.0025792 L32,22.0025792 C32,30.2868505 25.2842712,37.0025792 17,37.0025792 L16,37.0025792 L15,37.0025792 C6.71572875,37.0025792 4.6934861e-15,30.2868505 0,22.0025792 L1.89741892e-15,9.30306432 C1.7208322e-15,7.8611243 0.105061959,7.33892659 0.322061042,6.78501611 C0.539060125,6.23110563 0.867996333,5.76319177 1.31574483,5.37149456 C1.76349333,4.97979735 2.2192944,4.70416381 3.57610096,4.21603782 Z" id="path-3"></path>
        <filter x="-6.2%" y="-5.4%" width="112.5%" height="110.8%" filterUnits="objectBoundingBox" id="filter-4">
            <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.3 0" type="matrix" in="shadowInnerInner1" result="shadowMatrixInner1"></feColorMatrix>
            <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner2"></feGaussianBlur>
            <feOffset dx="0" dy="-1" in="shadowBlurInner2" result="shadowOffsetInner2"></feOffset>
            <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.2 0" type="matrix" in="shadowInnerInner2" result="shadowMatrixInner2"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixInner1"></feMergeNode>
                <feMergeNode in="shadowMatrixInner2"></feMergeNode>
            </feMerge>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
            <stop stop-color="#FFFFFF" stop-opacity="0.12" offset="0%"></stop>
            <stop stop-color="#687BFD" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <path d="M0.878131999,3.98240666 L9.84775631,0.610364529 C10.7586663,0.267916853 11.0803496,0.179397124 11.4534886,0.121168254 C11.8266277,0.0629393832 12.1768626,0.0629562839 12.5499961,0.121221166 C12.9231295,0.179486048 13.2448042,0.268036823 14.1556811,0.61057241 L23.1219755,3.98235035 C23.4561779,4.10802727 23.5681349,4.17744115 23.6780039,4.27541497 C23.7878728,4.37338879 23.8683718,4.4896632 23.9214036,4.62698648 C23.9744354,4.76430975 24,4.89353481 24,5.25058654 L24,17.2440627 L24,17.2440627 C24,23.7366876 18.7366876,29 12.2440627,29 L12,29 L11.7559373,29 C5.26331239,29 3.67842187e-15,23.7366876 0,17.2440627 L7.00008237e-16,5.25066734 C9.73425319e-16,4.89359254 0.0255692416,4.76435857 0.0786091902,4.6270275 C0.131649139,4.48969643 0.212159794,4.37341721 0.322042622,4.27544362 C0.43192545,4.17747004 0.543895869,4.10805944 0.878131999,3.98240666 Z" id="path-6"></path>
        <filter x="-29.2%" y="-17.0%" width="158.3%" height="148.0%" filterUnits="objectBoundingBox" id="filter-8">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.287859059   0 0 0 0 0.378668978   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-27.1%" y="-15.2%" width="154.2%" height="144.6%" filterUnits="objectBoundingBox" id="filter-9">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <filter x="-5.8%" y="-5.9%" width="111.5%" height="111.8%" filterUnits="objectBoundingBox" id="filter-10">
            <feGaussianBlur stdDeviation="0.5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="14.4790649%" y1="-19.7723389%" x2="93.7805176%" y2="123.025513%" id="linearGradient-11">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#D7DFFF" offset="100%"></stop>
        </linearGradient>
        <polyline id="path-12" points="17.5 12 12.5 18 19.5 18 14.5 24"></polyline>
        <filter x="-110.8%" y="-53.9%" width="378.7%" height="274.4%" filterUnits="objectBoundingBox" id="filter-13">
            <feMorphology radius="1.75" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="2" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feMorphology radius="1.75" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
            <feOffset dx="2" dy="4" in="shadowInner" result="shadowInner"></feOffset>
            <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.407843137   0 0 0 0 0.482352941   0 0 0 0 0.992156863  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="页面-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon-主功能" transform="translate(-534.000000, -155.000000)">
            <g id="icon-质检" transform="translate(534.000000, 154.000000)">
                <g transform="translate(10.000000, 1.000000)">
                    <ellipse id="阴影" fill="#1F44FF" opacity="0.55" filter="url(#filter-1)" cx="16" cy="40" rx="15" ry="3"></ellipse>
                    <g>
                        <g id="矩形-copy-3">
                            <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlinkHref="#path-3"></use>
                            <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3"></use>
                        </g>
                        <g id="分组-12" transform="translate(4.000000, 4.000000)">
                            <mask id="mask-7" fill="white">
                                <use xlinkHref="#path-6"></use>
                            </mask>
                            <g id="矩形-copy-3">
                                <use fill="black" fillOpacity="1" filter="url(#filter-8)" xlinkHref="#path-6"></use>
                                <use fill="url(#linearGradient-5)" fill-rule="evenodd" xlinkHref="#path-6"></use>
                                <use fill="black" fillOpacity="1" filter="url(#filter-9)" xlinkHref="#path-6"></use>
                            </g>
                            <path d="M1.34969016,24.7829187 L10.4150819,18.1582094 C11.0114283,17.7224178 11.2608606,17.6097642 11.556926,17.5356499 C11.8529914,17.4615357 12.1470086,17.4615357 12.443074,17.5356499 C12.7391394,17.6097642 12.9885717,17.7224178 13.5849181,18.1582094 L22.6503098,24.7829187 C23.59797,25.4754396 23.8998756,25.7665767 24.1906741,26.1396398 C24.4814727,26.5127028 24.6838041,26.9111595 24.813436,27.366061 C24.9430678,27.8209626 25,28.2364942 25,29.4102254 L25,37.8742641 C25,39.6573016 24.8143488,40.3038741 24.4657346,40.9557259 C24.1171204,41.6075778 23.6055433,42.1191549 22.9536914,42.4677691 C22.3018396,42.8163833 21.6552671,43.0020345 19.8722296,43.0020345 L4.1277704,43.0020345 C2.34473292,43.0020345 1.69816044,42.8163833 1.04630859,42.4677691 C0.394456741,42.1191549 -0.117120407,41.6075778 -0.465734592,40.9557259 C-0.814348778,40.3038741 -1,39.6573016 -1,37.8742641 L-1,29.4102254 C-1,28.2364942 -0.943067796,27.8209626 -0.813435959,27.366061 C-0.683804122,26.9111595 -0.481472652,26.5127028 -0.19067412,26.1396398 C0.100124412,25.7665767 0.402029993,25.4754396 1.34969016,24.7829187 Z" id="矩形" fill="#FFFFFF" opacity="0.2" filter="url(#filter-10)" mask="url(#mask-7)"></path>
                        </g>
                        <g id="路径-4" stroke-linecap="round" strokeLinejoin="round">
                            <use fill="black" fillOpacity="1" filter="url(#filter-13)" xlinkHref="#path-12"></use>
                            <use stroke="url(#linearGradient-11)" strokeWidth="3.5" xlinkHref="#path-12"></use>
                        </g>
                    </g>
                </g>
                <polygon id="矩形" opacity="0.362165179" points="0 0 52 0 52 52 0 52"></polygon>
            </g>
        </g>
    </g>
</svg>
	);
}



const cards = [
	{
	  url: "ani_image111.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E6%8B%9B%E5%B0%8F%E5%BD%B1%E5%A4%96%E5%AE%A3_Final_1026%E6%97%A0%E5%B0%81%E9%9D%A2_%E4%BD%8E%E7%A0%81%E7%8E%87_39MB.mp4",
	  id: 1,
	},
	{
	  url: "video_poster4.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%5B%E4%BB%8A%E6%97%A5%E7%8E%AF%E7%90%83%5D%E9%87%91%E7%89%8C%E8%83%8C%E5%90%8E%EF%BC%9A%E2%80%9CAI%E5%8A%A9%E7%90%86%E6%95%99%E7%BB%83%E2%80%9D%E5%8A%A9%E5%8A%9B%E4%B8%AD%E5%9B%BD%E9%9B%AA%E4%B8%8A%E9%A1%B9%E7%9B%AE%E8%AE%AD%E7%BB%83%5B%E4%B8%8B%E8%BD%BD%E7%89%88%5D_batch.m4v",
	  id: 2,
	},
	{
	  url: "video_poster7.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E6%AF%8F%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%96%B0%E9%97%BB%E8%A7%86%E9%A2%911.mp4",
	  id: 3,
	},
	{
	  url: "video_poster5.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.m4v",
	  id: 4,
	},
	{
	  url: "video_poster3.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E9%83%8E%E5%92%B8%E5%B9%B3%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E8%99%9A%E6%8B%9F%E4%BA%BA.mp4",
	  id: 5,
	},
	{
	  url: "video_poster4 .png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%93%9D%E8%89%B2%E5%85%89%E6%A0%87%E8%91%A3%E4%BA%8B%E9%95%BF%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E8%99%9A%E6%8B%9F%E4%BA%BA.mp4",
	  id: 6,
	},
	{
		url: "huaxizi_poster.png",
		videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%93%9D%E8%89%B2%E5%85%89%E6%A0%87%E8%91%A3%E4%BA%8B%E9%95%BF%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E8%99%9A%E6%8B%9F%E4%BA%BA.mp4",
		id: 7,
	  },
];

export default function ChannelPartners() {

	const [isHovered, setIsHovered] = useState(0);
	const [isHoveredA, setIsHoveredA] = useState(false);
	const [isHoveredB, setIsHoveredB] = useState(false);
	const [isHoveredC, setIsHoveredC] = useState(false);
	const [isHoveredD, setIsHoveredD] = useState(false);
	const [isHoveredE, setIsHoveredE] = useState(false);


	const [customerIndex, setCustomerIndex] = useState(0);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");

	const {isOpen, onOpen, onOpenChange} = useDisclosure();


	const [hoveredIndex, setActiveIndex] = useState<number | null>(null);

	useEffect(() => {
		setCurrentVideoUrl(cards[customerIndex].videoUrl);
	}, [customerIndex]);

	return (
		<div className=" w-full">
			<div className=" relative">
				<img className=" object-cover h-100 md:h-auto" src="banner2.png" alt="banner2" />
				<div className=" flex flex-col md:items-start items-center absolute md:top-1/5 md:left-64 left-24 top-12 right-1/3 -translate-x-12 md:-translate-x-0 text-white">
					<div className=" md:text-2xl text-left md:pt-4 text-base max-w-2xl">
						<h1 className=" md:text-5xl text-base pb-4">招商加盟</h1>
						<p>过去十五年，属于移动互联网。</p>
						<p>未来十五年，属于AI Being和AIGC。</p>
						<p>与奥森小冰一起，共赢万亿蓝海市场，创造属于我们的时代。</p>

						<p className="pt-16 pb-4">招商热线：13025507200</p>
						<Link href="http://t1.ink/f/h9ulpg">
							<button className='relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
								<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
								<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
									联系我们
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>


			<div className=" hidden md:block">
				<div className=" flex justify-center w-full flex-col">

					<div className=" bg-[#e9f1fc]">
						<h1 className=" text-5xl mt-16">应用场景</h1>
					</div>

					<div style={{backgroundImage: `url("https://i.p-i.vip/20/20240621-6674794212d78.png")`}} className=" justify-center bg-cover bg-no-repeat w-full  text-base text-gray-700 flex items-center px-28 leading-10 overflow-hidden h-120 p-12">
						<div className=" gap-6 flex ml-24">
							{/** item_big */}
							<div className=" transition-all  duration-700 h-full -skew-x-12">
								<div 
									onMouseEnter={() => {setIsHoveredA(true); setIsHovered(0)}} 
									onMouseLeave={() => {setIsHoveredA(false); setIsHovered(1)}} 
									className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
									style={{backgroundImage: `url("human_product_three1.png")`}}
								>
									<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
										<div className=" relative flex gap-4 p-4 justify-center items-center">
											<h2 className=" text-4xl">星怡</h2>
											{isHoveredA && (
												<Chip
													variant="shadow"
													classNames={{
														base: "absolute top-6 left-24 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
														content: "drop-shadow shadow-black text-white",
													}}
													>
													跨境电商主播
												</Chip>
											)}
										</div>
										{!isHoveredA ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">跨境电商主播</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">支持直播推流，轻松满足电商带货、赛事解说、资讯播报等场景。</p></div>)}
									</div>
								</div>
							</div>




						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredB(true); setIsHovered(2)}} 
								onMouseLeave={() => {setIsHoveredB(false); setIsHovered(3)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human2.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">招小影</h2>
										{isHoveredB && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												企业数字员工
											</Chip>
										)}
									</div>
									{!isHoveredB ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">企业数字员工</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">从皮囊到灵魂均可定制，完美契合品牌调性。不仅是品牌代言人，更是每位员工的数字助理。</p></div>)}
								</div>
							</div>
						</div>


						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredC(true); setIsHovered(4)}} 
								onMouseLeave={() => {setIsHoveredC(false); setIsHovered(5)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human3.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">TORBY</h2>
										{isHoveredC && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												线下导购迎宾
											</Chip>
										)}
									</div>
									{!isHoveredC ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">线下导购迎宾</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">线下门店智能迎宾与导购，不仅能推荐全品类SKU，更能实时回答常见问题，显著节约人工。</p></div>)}
								</div>
							</div>
						</div>


						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredD(true); setIsHovered(6)}} 
								onMouseLeave={() => {setIsHoveredD(false); setIsHovered(7)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human4.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">听枫</h2>
										{isHoveredD && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-24 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												文旅宣传大使
											</Chip>
										)}
									</div>
									{!isHoveredD ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">文旅宣传大使</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">基于城市与景区特色，定制有文化内核的数字人，为品宣片、文博馆、景区App增色，文化输出新玩法。</p></div>)}
								</div>
							</div>
						</div>



						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredE(true); setIsHovered(8)}} 
								onMouseLeave={() => {setIsHoveredE(false); setIsHovered(9)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human5.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">刘建宏</h2>
										{isHoveredE && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												名人数字分身
											</Chip>
										)}
									</div>
									{!isHoveredE ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">名人数字分身</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">已定制多位名人的数字分身，帮助他们显著节约视频内容制作精力，扩大IP影响力，提升IP价值。</p></div>)}
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>				
			</div>



			{/** 移动端 */}
			<div className=" md:hidden text-black p-4 bg-cover bg-center" style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/advantage_intro_bg.png")`}}>
			<div className=" flex overflow-x-scroll whitespace-nowrap mt-3">
					<div className=" relative">
						<img className=" min-w-96" src="human_product_three1.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col justify-center">
								<div className="flex gap-8">
									<h2 className=" text-2xl">星怡</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
									跨境电商主播
									</Chip>
								</div>
								<div className="w-24"><p className=" text-xs">支持直播推流，轻松满足电商带货、赛事解说、</p></div>
								<div className="w-24 mr-36"><p className=" text-xs">资讯播报等场景。</p></div>
							</div>
						</div>
					</div>





					<div className=" relative">
						<img className="min-w-96" src="human2.png" alt="" />
						<div className=" p-4 absolute bottom-0 pr-16  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center">
								<div className="flex gap-8">
									<h2 className=" text-2xl">招小影</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										企业数字员工
									</Chip>
								</div>
								<div className="w-24"><p className=" text-xs">从皮囊到灵魂均可定制，完美契合品牌调性。</p></div>
								<div className="w-24"><p className=" text-xs">不仅是品牌代言人，更是每位员工的数字助理。</p></div>
							</div>
						</div>
					</div>


					
					<div className="relative">
						<img className="min-w-96" src="human3.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center text-left ml-6">
								<div className="flex gap-8">
									<h2 className="text-2xl">TORBY</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										线下导购迎宾
									</Chip>
								</div>
								<div className=""><p className=" text-xs">线下门店智能迎宾与导购，不仅能推荐全品类SKU，</p></div>
								<div className=""><p className=" text-xs">更能实时回答常见问题，显著节约人工。</p></div>
							</div>
						</div>
					</div>


					<div className=" relative">
						<img className="min-w-96" src="human4.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center">
								<div className="flex gap-8">
									<h2 className=" text-2xl">听枫</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										文旅宣传大使
									</Chip>
								</div>
								<div className="w-24"><p className=" text-xs">基于城市与景区特色，定制有文化内核的数字人，为品宣片、文博馆、</p></div>
								<div className="w-24 mr-4"><p className=" text-xs">景区App增色，文化输出新玩法。</p></div>
							</div>
						</div>
					</div>


					<div className=" relative">
						<img className="min-w-96" src="human5.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col">
								<div className="flex gap-8">
									<h2 className=" text-2xl">刘建宏</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										名人数字分身
									</Chip>
								</div>
								<div className="w-24"><p className=" text-xs">已定制多位名人的数字分身，帮助他们显著节约视频内容制作精力，</p></div>
								<div className="w-24 mr-4"><p className=" text-xs">扩大IP影响力，提升IP价值。</p></div>
							</div>
						</div>
					</div>

				</div>
			</div>





			<div className=" flex flex-col justify-center items-center md:mt-12 bg-white">
				<h1 className=" font-bold text-4xl mb-12 hidden md:block text-black">客户案例</h1>
				<Modal
					className="bg-[#403d3d] w-96 md:w-full md:max-w-6xl max-w-4xl md:p-2"
					placement="center"
					shouldBlockScroll={true}
					isOpen={isOpen} 
					onOpenChange={onOpenChange}
				>
					<ModalContent>
						{(onClose) => (
							<ModalBody>
							<video 
								src={currentVideoUrl}
								playsInline={true}
								autoPlay={true}
								controls={true}
							/>
							</ModalBody>
						)}
					</ModalContent>
				</Modal>



				<div className="flex bg-[#edf3ff] w-full flex-col justify-center gap-12 md:gap-24 items-center p-4 md:p-20 flex-wrap  md:flex-nowrap">
					<div className=" flex md:gap-16 justify-center flex-col md:flex-row">
						<div className=" max-w-lg mb-20 flex justify-around items-center">
							<div className=" flex flex-col text-left max-w-lg mt-4 flex-wrap">
								<h2 className=" text-[#00305a] pb-4 pt-8 md:pt-0 text-2xl md:text-4xl font-bold">花西子 - 美妆带货直播间</h2>
								<p className="text-[#00305a] text-sm md:text-xl">作为美妆直播Top品牌，花西子在真人直播之外，采用小冰电商直播平台，打造了7X24小时不间断的数字人直播间。美妆直播间具有品类SKU多、峰值人流多、观众问题多的特点，永不疲倦的小冰数字人直播可随时搭建、随时待播、随时插播， 轻松满足花西子的品牌自播需求。</p>
							</div>
						</div>
						<Card
						    key={cards[6].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-md relative"
							onMouseEnter={() => setActiveIndex(cards[6].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<img
							alt="Woman listing to music"
							className="object-cover w-full"
							src={cards[6].url}
							/>
							{hoveredIndex === cards[6].id && (
							<div
								onClick={() => {onOpen(); setCustomerIndex(6)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<img width={70} src="play.png" alt="" />
							</div>
							)}
						</Card>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:gap-24 items-start p-4 md:p-20 flex-wrap-reverse">	
					<div
						className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row"
					>
						<Card
						 	key={cards[0].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-xl relative"
							onMouseEnter={() => setActiveIndex(cards[0].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<img
								alt="Woman listing to music"
								className="object-cover w-full"
								src={cards[0].url}
							/>
            				{hoveredIndex === cards[0].id && (
							<div 
								onClick={() => {onOpen(); setCustomerIndex(0)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<img width={70} src="play.png" alt="" />
							</div>
							)}
						</Card>
					</div>







					<div className=" flex flex-col text-left max-w-[550px] md:mt-4 flex-wrap gap-4 md:gap-24">
						<h2 className=" text-[#00305a] md:pb-4 text-2xl md:text-4xl font-bold md:mt-0 mt-12">招商局集团 - 招小影，数字员工</h2>
						<p className="text-[#00305a] md:text-xl text-base">2022年10月26日，招商局集团正式宣布首位数字员工“招小影”入职，她诞生于招商局金融科技有限公司与奥森小冰公司，联合研发的招商局集团首个数字人平台——“招商如影”。招小影身怀“绝技”，是常伴每个招商人左右的小帮手。未来，招小影也将活跃在招商地产、招商物流、招商证券、招商公路、招商蛇口等具体业务场景中，直接为民众服务。</p>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:mt-0 mt-8 md:gap-24 items-center p-4 md:p-20 flex-wrap">
					<div className=" flex flex-col text-left max-w-lg md:mt-4">
						<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold">国家体育总局冬运中心 – 观君，冬奥AI裁判与教练，数字专家</h2>
						<p className="text-[#00305a] md:text-xl text-base">2019年起，奥森小冰团队着手为国家体育总局冬运中心秘密研发人工智能裁判与教练系统——观君。这是AI技术首次全程参与国家队备战冬奥训练，并成为辅助运动员在此全球顶级赛事中取得两金一银战绩的首个案例。奥森小冰团队也因此得到了国家体育总局冬运中心的正式表彰。中国首枚冬奥会女子空中技巧金牌获得者徐梦桃，在接受中国国际广播电台采访时表示：“本次备战北京冬奥会的明显变化是，训练中有人工智能奥森小冰的技术分析，可以看技术录像，评测打分，这些都是科技助力。”除了参与到队伍的日常训练外，观君还在2021年北京冬奥测试赛空中技巧项目中，担任了唯一竞赛裁判，其执裁结果也获得了国际雪联、冬奥组委、国家体育总局冬运中心等一致认可。</p>
					</div>





					<div
						className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row"
					>
						<Card
							key={cards[2].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-xl relative"
							onMouseEnter={() => setActiveIndex(cards[2].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<img
								alt="Woman listing to music"
								className="object-cover w-full"
								src={cards[2].url}
							/>
            				{hoveredIndex === cards[2].id && (
							<div 
								onClick={() => {onOpen(); setCustomerIndex(2)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<img width={70} src="play.png" alt="" />
							</div>
							)}
						</Card>
					</div>
				</div>



				<div className="flex bg-[#edf3ff] w-full flex-col justify-center gap-12 md:gap-24 items-center p-4 md:p-20 flex-wrap  md:flex-nowrap">
					<div className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row items-center">
						<Card
						    key={cards[3].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-md relative"
							onMouseEnter={() => setActiveIndex(cards[3].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<img
							alt="Woman listing to music"
							className="object-cover w-full"
							src={cards[3].url}
							/>
							{hoveredIndex === cards[3].id && (
							<div
								onClick={() => {onOpen(); setCustomerIndex(3)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<img width={70} src="play.png" alt="" />
							</div>
							)}
						</Card>
						<div className=" max-w-lg mb-20 flex justify-around">
							<div className=" flex flex-col text-left max-w-lg mt-4 flex-wrap">
								<h2 className=" text-[#00305a] pb-4 pt-8 md:pt-0 text-2xl md:text-4xl font-bold">红杉资本 – Hóng，分析师，数字员工</h2>
								<p className="text-[#00305a] text-sm md:text-xl">2022年7月11日，红杉中国首位数字员工Hóng正式亮相，她是奥森小冰团队为红杉资本量身定制的数字人，基于深度神经网络渲染技术小样本学习，经过一周的训练期即诞生。结合奥森小冰框架的全域能力，Hóng将不断成长，并在红杉资本各个业务流程中承担重要职责。</p>
							</div>
						</div>
					</div>
				</div>

			</div>









			<div className=" w-full flex justify-center items-center p-8 flex-col mb-24">
				<h1 className=" text-5xl pb-14 text-[#333333]">加盟合作保障</h1>
				<div className="flex flex-col md:flex-row flex-wrap justify-between text-[#00305a] gap-8 md:max-w-5xl max-w-96 pt-8">
					<div className="  flex flex-col justify-center items-center space-y-2">
						<img className=" object-cover md:w-36 w-24" src="partners1.png" alt="" />
						<h2 className=" font-bold text-3xl">多元化市场支持</h2>
						<p className=" text-sm">全域市场营销玩法，协助区域伙伴获得市场优势</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2">
					<img className=" object-cover md:w-36 w-24" src="partners2.png" alt="" />
						<h2 className=" font-bold text-3xl">全方位技术支持</h2>
						<p className=" text-sm">专业售前团队项目支持，强大的售后团队支撑</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2">
					<img className=" object-cover md:w-36 w-24" src="partners3.png" alt="" />
						<h2 className=" font-bold text-3xl">成熟的方案支持</h2>
						<p className=" text-sm">众多合作案例，引领伙伴区域市场拓展</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2 pt-8">
					<img className=" object-cover md:w-36 w-24" src="partners4.png" alt="" />
						<h2 className=" font-bold text-3xl">顾问式伙伴扶持</h2>
						<p className=" text-sm">协助伙伴进行销售、运营团队搭建与管理；协助进行当地市场拓展与业务规划</p>
					</div>


					<div className=" flex flex-col justify-center items-center space-y-2 pt-8">
					<img className=" object-cover md:w-36 w-24" src="partners5.png" alt="" />
						<h2 className=" font-bold text-3xl">扁平化渠道政策</h2>
						<p className=" text-sm">低门槛、高返利、不压货，线下市场区域保护，真诚、平等、无套路</p>
					</div>

				</div>
			</div>


		</div>
	);
}
