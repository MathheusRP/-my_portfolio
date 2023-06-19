import styled from "styled-components";

export const IntroductionStyle = styled.section`

    height: 100vh;
    width: 100vw;
    min-height: 895px;
    background-color: var(--color1);

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--color2);
        align-items: center;
        height: 100px;
        border-bottom: solid 4px var(--red);
        gap: 16px;
        color: var(--white);
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 5;

        nav {
            display: flex;
            justify-content: space-evenly;
            width: 100%;

            a {
                text-decoration: none;
                color: var(--white);
                transition: 0.5s;

                &:hover {
                    transition: 0.5s;
                    color: var(--red);
                }
            }
        }
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-top: 100px;
    }

    .presentation {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .photo {
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 25px;
        letter-spacing: 2px;

        h2 {
            color: var(--white);
            font-size: 22px;
            max-width: 300px;
            /* background-color: aqua; */

            b {
                color: var(--red);
            }
        }

        img {
            width: 150px;
            height: 150px;
            object-fit: fill;
            padding: 5px;
            box-shadow: 0px 0px 15px 5px rgb(0, 0, 0, 0.5);
            border-radius: 50%;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        color: var(--white);
        gap: 16px;
        max-width: 600px;
        width: 95%;

        
        h3 {
            font-size: 28px;
            letter-spacing: 2px;
            line-height: 40px;
            text-align: justify;

            b {
                color: var(--red);
            }
        }

        p {
            width: 100%;
            font-size: 18px;
            letter-spacing: 2px;
            line-height: 30px;
            text-align: justify;
        }
    }

    .buttons {
        display: flex;
        gap: 20px;

        .button {
            text-decoration: none;
            cursor: pointer;
            padding: 15px 30px;
            font-size: 20px;
            letter-spacing: 2px;
            border-radius: 12px;
            border: none;
            background-color: var(--red);
            color: var(--white);
        }

        .gitHub {
            height: 50px;
            width: 50px;
            color: var(--color1);
            background-color: var(--white);
            border-radius: 50%;
            padding: 4px;
        }
    }
    ul {
        display: flex;
        gap: 26px;
        overflow-x: auto;
        margin-top: 16px;
        padding: 16px 0px;
        transition: 0.5s;

        li {
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
            width: 150px;

            .icon {
                height: 100px;
                width: 100px;
                color: var(--color3);

                @media (max-height: 895px) {
                    height: 85px;
                    width: 85px;
                }
            }

            span {
                font-size: 24px;
                color: var(--color3);
                font-weight: 600;
            }

            &:hover {
                transform: scale(1.2);
                filter: brightness(2);
                transition: 0.5s;
            }
        }
    }

    @media (min-width: 1080px) {      
        display: flex;
        align-items: center;

        header {
            flex-direction: row;
            justify-content: space-between;
            padding: 0px 60px;
            height: 80px;
            
            nav {
                width: 500px;
                justify-content: end;
                gap: 32px;
            }
        }

        .container {
            flex-direction: row;
            justify-content: space-between;
            
                ul {
                    width: 400px;
                    flex-wrap: wrap;
                    overflow: hidden;
                    justify-content: space-between;
                    padding: 16px;
                }
            }

            .photo {
                img {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    padding: 10px;
                }

                h2 {
                    max-width: 350px;
                    font-size: 32px;
                }
            }
        }
`