import styled from "styled-components";

export const ContactsStyle = styled.section`

    height: 100vh;
    background-color: var(--color1);
    padding-top: 50px;
    min-height: 1000px;

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0px auto;
        
    }

    h3 {
        color: var(--white);
        font-size: 28px;
        letter-spacing: 3px;
        max-width: 500px;

        b {
            color: var(--red);
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        margin-top: 48px;
        gap: 48px;
        max-width: 500px;

        li {
            width: 100%;

            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 32px;
            }

            .containerIcon {
                height: 100px;
                width: 100px;
                padding: 20px;
                
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 16px;
                box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.3);

                .icon {
                    width: 50px;
                    height: 50px;
                    color: white;
                }
            }

            .info {
                display: flex;
                flex-direction: column;
                color: var(--white);
                gap: 10px;

                h4 {
                    font-size: 20px;
                }

                p {
                    color: rgb(130, 130, 130);
                    line-height: 22px;
                }

                a {
                    text-decoration: none;
                    color: var(--white);
                }
            }

        }
    }

    @media (min-width: 1100px){
        /* min-height: 800px; */
        
        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 100px auto 0px auto;

            h3 {
                font-size: 32px;
            }
        }
    }

`