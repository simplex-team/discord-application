import React from 'react'
import {useState,useEffect} from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import codeData from './data/data'
import './dashboard.css'
import {discord_dummy} from '../data_discord'

const Dashboard = () => {
  const history = useHistory()
   
    const [username, setUsername] = useState({id:'',username:'',avatar:'', description:'No description added'})
    const [descInput, setDescInput] = useState('')
    const [userdiscriminator, setUserdiscriminator] = useState([])
    const [guildId, setGuildId] = useState([])
  const [members, setMembers] = useState(discord_dummy)
  const [profile, setProfile] = useState({ })
  const [logged,setLogged] =  useState(true)
  useEffect(async () => {
      const code = new URLSearchParams(window.location.search).get('code')
        // console.log('***',code)
        if (code) {
           await codeData(code)
            history.push('/dashboard')
          
    }
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
          
        
          const userResult = await fetch('https://discord.com/api/users/@me', {
	        headers: {
	     	authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
         	},
          });
        const data = await userResult.json()
        // console.log(data)
       setUsername({...username,id:data.id,username:data.username,avatar:data.avatar})
      // console.log(username)
        // setUserId(data.id)
        setUserdiscriminator(data.discriminator)
         const userGuilds = await fetch('https://discord.com/api/users/@me/guilds', {
	        headers: {
	     	authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
         	},
         });
        const data1 = await userGuilds.json()
        // setGuildId(data1)
        // console.log(data1)
         data1.map(data => {
            // console.log(data)
            setGuildId((prevRes) => [...prevRes,data])
        })
        
        }
      }, [])
  
  const profileHandler = (id) => {
        setLogged(false)
        const user = members.find(el => {
          return el.id === id
        })
        setProfile(user)
  }
  const handleForm = (e) => {
    setDescInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('desc', descInput)
    // setUsername({ ...username, description: descInput })
    setDescInput('')
  }
  // console.log(descInput)
    const logoutHandler = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
//  console.log(profile.name)
    return (
      <>
          <div className="grid">
      <div className="nav">
        <div className="nav__container">
         
        </div>
      </div>
      <div className="header">
        <div className="header__container">
          <div className="header__server">
            <div className="server__title">Server</div>
          </div>
          <div className="header__channel">
              {guildId.map((guild,index) =>{
                  const { icon, id, name } = guild
                  return (
                        
            <div className="channel__item" key={index}>
              <h4 className="channel__group">
                <img
                  src={`https://cdn.discordapp.com/icons/${id}/${icon}`}
                  width="32"
                  height="32"
                  style={{borderRadius:"50%", marginRight:'10px'}}
                />
                  <small>{name}</small> 
              </h4>
              {/* <a href="#" className="channel__title" id="guildList" onClick={memberHandler}>Members</a> */}
            </div>
                    )
              })}
            
            
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main__container">
          <div className="main__channel">
            <div className="header__title">Description</div>
          </div>
          <div className="main__chat" >
                <div className="main__post" >
                  {/* {profile.map((el) => {
                    const {name,icon} = el
                  })} */}
              <div className="post__avatar">
                <img
                  src={logged ?`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}` : profile.icons}
                  width="48"
                  height="48"
                  style={{borderRadius:"50%"}}
                />
              </div>
              <div className="post__content">
                    <h5 className="post__name">{logged ? username.username : profile.name }</h5>
                <div className="post__timestamp"></div>
                <div className="post__message">
                  <p>
                    {logged ? localStorage.getItem('desc') : profile.description }
                  </p>
                </div>
              </div>
            </div>
              </div>
                <div class="main__input">
                <div class="input__container">
                  <form onSubmit={e =>handleSubmit(e)}>

          <input class="input__message" onChange={(e) =>handleForm(e)} type="text" placeholder="Write Description"  />
                  </form>
        </div>
      </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__settings">
            <div className="settings__group">

              <button className="group__setting">
                <i className="fas fa-bell " style={{color:'yellow', borderRadius:"50%"}} />
              </button>
            </div>
              <div className="settings__group">

              <button className="group__setting" onClick={logoutHandler}>
                <i class="fas fa-sign-out-alt" style={{color:'white', borderRadius:"50%"}}/>
              </button>
            </div>  
            
            <div className="profile__badge">
              <div className="profile__user">
                <div className="user__name">{username.username}</div>
                <div className="user__id">{username.id}</div>
              </div>
              <div className="profile__avatar">
                <img
                  src={`https://cdn.discordapp.com/avatars/${username.id}/${username.avatar}`}
                  width="45"
                  height="45"
                  alt=""
                  style={{borderRadius:"50%", marginLeft:"7px"}}
                />
                <div className="avatar__status"></div>
              </div>
            </div>
          
          </div>
          <div className="footer__friends">
            <div className="friend__category">Members</div>
            {members.map((member,index) =>{
                const { id,name, icons } = member
                return (

            <div className="friend" key={index}>
              <div className="friend__avatar">
                <img
                  src={icons}
                  width="32"
                  height="32"
                  style={{borderRadius:"50%"}}
                />
                <div className="avatar__status"></div>
              </div>
              <div className="friend__user" >
                      <button className="user__name btn-dark" type="button" style={{ background: 'transparent', borderRadius:'10px' }} onClick={() => profileHandler(id)}>{name}</button>
              </div>
            </div>
                )
            })}
            
            
            
          </div>
        </div>
      </div>
    </div>
       </> 
    )
}

export default Dashboard
