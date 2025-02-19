import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import NavBrand from '../index'

const defaultArgs = {
  logo: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A99A8" />
          <stop offset="1" stopColor="#576675" />
        </linearGradient>
      </defs>
    </svg>
  ),
  wordmark: 'TITLE'
}

export default {
  title: 'Components/NavBrand',
  component: NavBrand
} as Meta

const Template: Story = args => <NavBrand {...args} />

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const AsButton = Template.bind({})
AsButton.args = {
  ...defaultArgs,
  'aria-label': 'Placeholder Brand Text',
  onClick: action('on click')
}

export const AsLink = Template.bind({})
AsLink.args = {
  ...defaultArgs,
  'aria-label': 'Placeholder Brand Text',
  href: 'https://duckduckgo.com'
}

export const Flow = Template.bind({})
Flow.args = {
  ...defaultArgs,
  logo: (
    <svg aria-hidden viewBox="0 0 32 32">
      <defs>
        <linearGradient
          id="flow-gradient"
          x1="46.248"
          y1="48.2732"
          x2="-33.2531"
          y2="-36.1648"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.15" stopColor="#27AAE1" />
          <stop offset="0.2" stopColor="#279FD9" />
          <stop offset="0.51" stopColor="#2968B2" stopOpacity="0.99" />
          <stop offset="0.74" stopColor="#2B4699" stopOpacity="0.99" />
          <stop offset="0.86" stopColor="#2B3990" stopOpacity="0.99" />
        </linearGradient>
      </defs>
      <path
        d="M32 4.62132V0H0V32H32V26.4449H19.9037V23.2955H32V20.2217H25.0533V17.0723H32V7.77073H19.9037V4.62132H32ZM16.5982 4.51729C16.9326 4.50504 17.263 4.59298 17.547 4.76984C17.831 4.94669 18.0557 5.20439 18.1923 5.50986C18.3288 5.81533 18.371 6.15463 18.3133 6.48421C18.2556 6.8138 18.1008 7.11864 17.8686 7.3596C17.6365 7.60057 17.3377 7.76666 17.0104 7.83658C16.6832 7.90649 16.3426 7.87703 16.0323 7.75198C15.7219 7.62693 15.456 7.41199 15.2687 7.13475C15.0814 6.85751 14.9812 6.53062 14.9809 6.19602C14.9765 5.97951 15.0149 5.76427 15.0939 5.56262C15.1729 5.36098 15.2909 5.1769 15.4411 5.02095C15.5913 4.86499 15.7709 4.74022 15.9695 4.6538C16.168 4.56737 16.3817 4.52098 16.5982 4.51729ZM7.68908 12.4192C7.70114 12.1022 7.80614 11.7958 7.99101 11.538C8.17589 11.2803 8.43248 11.0826 8.72885 10.9696C9.02522 10.8565 9.34829 10.8331 9.65786 10.9023C9.96742 10.9715 10.2498 11.1302 10.4699 11.3586C10.6899 11.587 10.838 11.8751 10.8956 12.1871C10.9531 12.499 10.9177 12.821 10.7937 13.1129C10.6697 13.4049 10.4626 13.6539 10.1981 13.829C9.93366 14.0042 9.62354 14.0977 9.30634 14.0979C8.86944 14.0892 8.45383 13.9076 8.15065 13.5929C7.84747 13.2782 7.68148 12.8561 7.68908 12.4192ZM16.5935 26.5489C16.2589 26.5621 15.9281 26.475 15.6435 26.2987C15.3588 26.1225 15.1334 25.8652 14.9961 25.5598C14.8589 25.2544 14.816 24.915 14.8731 24.5851C14.9302 24.2553 15.0847 23.95 15.3166 23.7086C15.5485 23.4671 15.8473 23.3005 16.1746 23.2302C16.502 23.1599 16.8428 23.189 17.1535 23.3139C17.4641 23.4388 17.7303 23.6537 17.9178 23.931C18.1054 24.2083 18.2057 24.5354 18.206 24.8702C18.2136 25.3055 18.0489 25.7262 17.7478 26.0406C17.4466 26.3551 17.0334 26.5378 16.5982 26.5489H16.5935ZM22.5187 20.2217H9.32053V17.0723H22.5234L22.5187 20.2217ZM26.7746 10.8492V13.9939H12.6402V10.8492H26.7746Z"
        fill="url(#flow-gradient)"
      />
    </svg>
  ),
  wordmark: (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 68 32"
      width="68"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m31.9376 16.0914v-.04c-.0051-.9708.1833-1.933.5541-2.8301.3709-.8971.9167-1.7112 1.6056-2.3946s1.5071-1.2225 2.4066-1.58566c.8996-.36316 1.8624-.54313 2.8323-.52937 4.1734 0 7.361 3.21873 7.361 7.30213v.0423c.0054.9711-.1827 1.9334-.5534 2.8308s-.9165 1.7118-1.6055 2.3954c-.6889.6837-1.5072 1.223-2.4069 1.5863s-1.8627.5434-2.8328.5296c-4.1734 0-7.361-3.2188-7.361-7.3068zm10.2012 0v-.04c0-1.6705-1.1008-3.1788-2.8402-3.1788-1.7393 0-2.8003 1.4872-2.8003 3.1365v.0423c0 1.6681 1.1009 3.1788 2.8379 3.1788s2.8026-1.4942 2.8026-3.1388zm-22.8179-7.07773h-11.3209v14.08273h4.5208v-4.6073h6.3095v-3.6628h-6.3165v-1.7903h6.8071zm5.9785 0h-4.5279v14.08273h10.8655v-4.0246h-6.3376zm25.3507.00088h-4.7321l4.4222 14.18135h3.9411l2.3778-7.0014 2.3754 7.0014h3.9411l4.4246-14.18135h-4.657l-1.913 6.75945-2.183-6.79939h-3.9011l-2.183 6.79939z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  )
}

export const FlowAsButton = Template.bind({})
FlowAsButton.args = {
  ...Flow.args,
  'aria-label': 'Pluralsight Flow',
  onClick: action('on click')
}

export const FlowAsLink = Template.bind({})
FlowAsLink.args = {
  ...Flow.args,
  'aria-label': 'Pluralsight Flow',
  href: 'https://duckduckgo.com'
}

export const Skills = Template.bind({})
Skills.args = {
  ...defaultArgs,
  logo: (
    <svg aria-hidden viewBox="0 0 32 32">
      <defs>
        <linearGradient
          id="skills-gradient"
          x1="45.6377"
          y1="47.4727"
          x2="-32.2436"
          y2="-35.2537"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.03" stopColor="#F05A28" />
          <stop offset="0.93" stopColor="#EB008B" />
        </linearGradient>
      </defs>
      <path
        d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
        fill="url(#skills-gradient)"
      />
    </svg>
  ),
  wordmark: 'SKILLS'
}

export const SkillsAsButton = Template.bind({})
SkillsAsButton.args = {
  ...Skills.args,
  'aria-label': 'Pluralsight Skills',
  onClick: action('on click')
}

export const SkillsAsLink = Template.bind({})
SkillsAsLink.args = {
  ...Skills.args,
  'aria-label': 'Pluralsight Skills',
  href: 'https://duckduckgo.com'
}
