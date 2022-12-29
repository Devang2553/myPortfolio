import React from 'react'
import './socialLinks.css'
import {ReactComponent as GitHub} from '../icons/GitHub.svg'
import {ReactComponent as LinkDN} from '../icons/LinkDN.svg'
import {ReactComponent as Mail} from '../icons/Mail.svg'
import {ReactComponent as Resume} from '../icons/Resume.svg'

const SocialLinks = () => {
    const links=[
        {
            id: 1,
            child: (
              <>
                LinkedIn <LinkDN size={30} className="fill-white "  />
              </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
          },
          {
            id: 2,
            child: (
              <>
                GitHub <GitHub size={30} className="fill-white "  />
              </>
            ),
            href: "https://github.com/Devang2553",
          },
          {
            id: 3,
            child: (
              <>
                Mail <Mail size={30} className="fill-white"/>
              </>
            ),
            href: "mailto:devang@6314gmail.com",
          },
          {
            id: 4,
            child: (
              <>
                Resume <Resume size={30} className="fill-white"/>
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