import React from 'react'
import './socialLinks.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links=[
        {
            id: 1,
            child: (
              <>
                LinkedIn <FaLinkedin size={30} />
              </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
          },
          {
            id: 2,
            child: (
              <>
                GitHub <FaGithub size={30} />
              </>
            ),
            href: "https://github.com/Devang2553",
          },
          {
            id: 3,
            child: (
              <>
                Mail <HiOutlineMail size={30} />
              </>
            ),
            href: "mailto:devang@6314gmail.com",
          },
          {
            id: 4,
            child: (
              <>
                Resume <BsFillPersonLinesFill size={30} />
              </>
            ),
           href: "/Resume.pdf",
            style: "rounded-br-md",
            download: true,
          },
        ];

  return (
    <div className='all'>
<ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "linkedIn" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks