import styled from "styled-components";

export const ProjectsStyled = styled.section`
    padding-top: 80px;
    width: 100vw;
    background-color: var(--color2);

    .teste {
        height: 2000px;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0px auto;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 32px;

        .vetor {
            right: 0px;
            top: 50px;
            align-self: flex-end;
        }
    }

    h2 {
        top: 60px;
        color: var(--red);
    }

    .listProjects {
        margin-top: 40px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;

        .project {
            display: flex;
            flex-direction: column;
            gap: 16px;
            border-bottom: 2px solid var(--white);
            padding-bottom: 32px;

            .info {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 16px;
            }

            h3 {
                color: var(--white);
                font-size: 26px;
            }

            span {
                color: var(--red);
                font-size: 20px;
            }

            ul {
                display: flex;
                gap: 16px;
                overflow-x: auto;
                padding-bottom: 16px;

                li {
                    padding: 10px 20px;
                    min-width: max-content;
                    background-color: var(--color1);
                    border-radius: 8px;
                    font-size: 16px;
                    color: var(--white);
                }
            }

            p {
                color: var(--white);
                margin-top: -16px;
                letter-spacing: 2px;
                line-height: 25px;
                text-align: justify;
            }
            
            .links {
                display: flex;
                gap: 32px;

                a {
                    text-decoration: none;
                    color: var(--red);
                    font-size: 20px;
                    font-weight: 600;
                }
            }

            img {
                max-width: 600px;
                object-fit: cover;
                border-radius: 16px;
                opacity: 0.7;
            }

            @media (min-width: 1100px) {
                flex-direction: row;
                justify-content: space-between;
                margin-top: 50px;
                border-bottom: none;
                gap: 5%;

                .info {
                    width: 50%;
                }

                img {
                    width: 500px;
                }

                .listLinguagens {
                    width: 100%;
                    flex-wrap: wrap;
                    overflow-x: hidden;    
                }
            }
        }
    }

    
`