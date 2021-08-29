
import React from 'react'
import ContentLoader from 'react-content-loader'

const DoorDashFavorite = (props: any) => (
  <ContentLoader
    width={"100%"}
    height={460}
    viewBox="0 0 100% 460"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="42" y="47" rx="10" ry="10" width="95%" height="430" />
  </ContentLoader>
)

DoorDashFavorite.metadata = {
  name: 'Nic Bovee', // My name
  github: 'ghettifish', // Github username
  description: 'A simple favorite from the DoorDash local favorites.', // Little tagline
  filename: 'DoorDashFavorite', // filename of your loader
}

export default DoorDashFavorite