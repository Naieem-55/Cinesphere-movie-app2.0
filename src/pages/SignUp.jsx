import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

export default function SignUp() {
    const [showPassword , setShowPassword] = React.useState(false);
  return (
    <Container showPassword={showPassword}>
        <BackgroundImage />
        <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited Movies , TV shows and more..</h1>
                <h3>Watch anyWhere . Cancel anyTime.</h3>
                <h4>Ready to Watch ? Enter your Email to create or restart memberShip !</h4>
            </div>
            <div className="form">
                <input type="email" placeholder="Email Address" name='email'/>
                {
                    showPassword && (<input type="password" placeholder='password' name='password'/>)
                }

                {
                    !showPassword && <button onClick={() => setShowPassword(true)}>Get Started</button>
                }
            </div>
            <button>Log In</button>
        </div>               
        </div>
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
    }
    .body{
        gap:1rem;
        text{
            gap:1rem;
            text-align: center;
            font-size: 2rem;
            h1{
                padding:0 25rem;
            }
        }
        .form{
            display: grid;
            grid-template-columns: ${({showPassword}) => showPassword ? '1fr 1fr' : '2fr 1fr'};
            width:60%;
            input{
                color: black;
                border: none;
                padding:1.5rem;
                font-size: 1rem;
                border: 1px solid black;
                &:focus{
                    outline: none;
                }
            }
            button{
                padding: 0.5rem 1rem;
                background-color:#e50914;
                border: none;
                cursor:pointer;
                color: #fff;
                font-weight:bold;
                font-size:1.05rem;
            }
        }
        button{
            padding: 0.5rem 1rem;
            background-color:#e50914;
            border: none;
            cursor:pointer;
            color: #fff;
            border-radius:0.3rem;
            font-weight:bold;
            font-size:1.05rem;
        }
    }
`;