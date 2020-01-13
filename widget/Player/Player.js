import React from 'react'
import Oplayer from './Op'
import { $theme } from '../../asset/js/const'

export default function Player({ url, type }) {
  const m = type === 'hls' ? 'm3u8' : type
  return <Oplayer source={{ uri: url, overrideFileExtensionAndroid: m }} themeColor={$theme} />
}
