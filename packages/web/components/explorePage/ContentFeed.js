import React from 'react'
import Project from './Project'

export default ({ctg}) => {
  const data = [
    {
      title: 'Implentation, Balance, Action',
      id: 1,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 2,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 3,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 4,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 5,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 6,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 7,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 8,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 9,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
    {
      title: 'Implentation, Balance, Action',
      id: 10,
      creators: [
        {
          name: 'Alex',
          id: 'alexsexotic',
          profilePic: 'https://www.redditstatic.com/avatars/avatar_default_04_D4E815.png'
        }
      ]
    },
  ]

  return data.map(i => (
    <Project
      key={i.id}
      data={i}
    />
  ))
}