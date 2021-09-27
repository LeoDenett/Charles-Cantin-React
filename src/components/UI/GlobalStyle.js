import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle= createGlobalStyle`
    body{
        transition: linear 0.25s;
        background-color: #7AA5D2;
        color: #EEEEEE;
        font-family: 'Ubuntu Condensed', sans-serif;
        margin: 0;
        padding: 0;
    }
    button {
        font-family: 'Ubuntu Condensed', sans-serif;
        padding: 1rem 1.5rem;
        background-color: #7AA5D2;
        color: #EEEEEE;
        cursor: pointer;
        border: solid 0.1rem;
        transition: linear 0.25s;
    }
    button:hover {
        color: #EEEEEE;
        background-color: #7AA5D2;
        border: solid 0.2rem;
        border-radius: 1rem;
    }
    h1, h2, h3 h4 h5 {
        letter-spacing: 0.1rem;
    }
    h1 {
        font-size: 1.6rem;
    }
    h2 {
        font-size: 1.4rem;
    }
    a {
        color: #EEEEEE;
        text-decoration: none;
    }
    ul,
    li {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    ul {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
    }

    li {
    background-color: red;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
    }

    li:last-child {
    margin-bottom: 0px;
    }

    .avatar {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
    }

    //Galerie
    .row-galerie{
        position: relative;
        left: 4rem;
        gap: 0rem;
        width: 100%;
        margin-right: 0rem;
        @media (max-width: 320px) {
            left: -1.5rem;
        }
    }
    .wrapper-img {
        width: 450px;
        height: 280px;
        @media (max-width: 1440px) {
                width: 400px;
                height: 250px;
                margin-left: -3rem;
                margin-top: 2rem;
            }
        @media (max-width: 1024px) {
                width: 290px;
                height: 250px;
                margin-left: -4rem;
                margin-top: -3rem;
            }
        @media (max-width: 988px) {
                width: 390px;
                height: 250px;
                margin-top: -3rem;
                margin-left: -2.5rem;
                margin-bottom: 4rem;
            }
        @media (max-width: 868px) {
                width: 320px;
                height: 250px;
                margin-top: -3rem;
                margin-left: -2.5rem;
            }
        @media (max-width: 768px) {
                width: 290px;
                height: 250px;
                margin-top: -3rem;
                margin-left: -3.2rem;
                margin-bottom: -1rem;
            }
        @media (max-width: 767px) {
                width: 500px;
                height: 250px;
                margin-top: -3rem;
                margin-left: 0.5rem;
                margin-bottom: 8rem;
            }
        @media (max-width: 625px) {
                width: 420px;
                height: 250px;
                margin-top: -3rem;
                margin-left: -1.5rem;
                margin-bottom: 5rem;
            }
        @media (max-width: 525px) {
                width: 360px;
                height: 250px;
                margin-top: -3rem;
                margin-left: -2.9rem;
                margin-bottom: 2rem;
            }
        @media (max-width: 425px) {
                width: 320px;
                height: 250px;
                margin-top: 0rem;
                margin-left: -4.7rem;
                margin-bottom: -2rem;
            }
        @media (max-width: 375px) {
                width: 300px;
                height: 250px;
                margin-top: -1rem;
                margin-bottom: -2rem;
                margin-left: -4.9rem;
            }
        @media (max-width: 320px) {
                width: 300px;
                height: 250px;
                margin-top: -0.5rem;
                margin-bottom: -2rem;
                margin-left: 0rem;
                margin-right: 0rem;
            }
            && img {
                @media (max-width: 320px) {
                    position: relative;
                    left: 0.6rem;
                    margin: 0rem;
            }
        }
    }
    div .galerie-title{
        text-shadow: 1px 1px 2px black;
        @media (max-width: 1440px) {
            position: relative;
            left: 7rem;
            bottom: 2rem;
        }
        @media (max-width: 1024px) {
            position: relative;
            left: 3rem;
            bottom: 5rem;
        }
        @media (max-width: 988px) {
            position: relative;
            left: 8rem;
        }
        @media (max-width: 868px) {
            position: relative;
            left: 5rem;
        }
        @media (max-width: 768px) {
            position: relative;
            left: 4rem;
        }
        @media (max-width: 625px) {
            position: relative;
            left: 9rem;
        }
        @media (max-width: 525px) {
            position: relative;
            left: 6rem;
        }
        @media (max-width: 425px) {
            position: relative;
            left: 3rem;
            bottom: 2rem;
        }
        @media (max-width: 320px) {
            position: relative;
            left: 7rem;
            margin-bottom: 1rem;
            margin-right: 0rem;
        }
    }
    .img-grid {
        @media (max-width: 768px) {
            height: 650px;
            margin: 0;
            gap: 1rem;
        }
        @media (max-width: 425px) {
            height: 500px;
            margin: 0;
            gap: 1rem;
            display: inline;
        }
    }
    .img-wrap{
        @media (max-width: 768px) {
            display: inline-block;
            height: 400px;
            width: 235px;
        }
        @media (max-width: 425px) {
            width: 395px;
        }
        @media (max-width: 375px) {
            width: 345px;
            height: 345px;
        }
        @media (max-width: 320px) {
            width: 290px;
            height: 345px;
        }
    }
    .img-modal{
        @media (max-width: 1024px) {
            height: 700px;
            min-width: 800px;
            position: relative;
            top: 2rem;
        }
        @media (max-width: 768px) {
            height: 600px;
            min-width: 600px;
            position: relative;
            top: 5rem;
        }
        @media (max-width: 425px) {
            height: 400px;
            min-width: 423px;
            position: relative;
            top: 5rem;
        }
        @media (max-width: 375px) {
            min-width: 373px;
        }
        @media (max-width: 375px) {
            min-width: 317px;
        }
    }

    //Tarifs and Prestations
    .tarif{
        @media (max-width: 425px) {
            position: relative;
            top: 2rem;
        }
    }
    .tarifContainer{
        height: 745px;
        @media (max-width: 625px) {
            height: 840px;
        }
        @media (max-width: 425px) {
            height: 720px;
        }
        @media (max-width: 375px) {
            height: 800px;
        }
    }
    .titleTarif {
        @media (max-width: 425px) {
            font-size: 1rem;
        }
        @media (max-width: 375px) {
            font-size: 0.8rem;
        }
    }
    //Contact
    .contactInfo {
        text-align: center;
        position: relative;
        left: 45rem;
        top: 2rem;
        max-width: 500px;
        border: solid 0.2rem #EEEEEE;
        padding: 2rem;
        border-radius: 2rem;
        @media (max-width: 1440px) {
            left: 30rem;
            top: 1rem;
        }
        @media (max-width: 1024px) {
            left: 17rem;
            top: 2.5rem;
        }
        @media (max-width: 768px) {
            left: 9rem;
            top: 4.5rem;
            padding: 1.5rem;
        }
        @media (max-width: 625px) {
            left: 4rem;
            padding: 1rem;
            width: 500px;
            top: 4.5rem;
        }
        @media (max-width: 525px) {
            left: 4rem;
            padding: 1rem;
            width: 400px;
            top: 3.5rem;
        }
        @media (max-width: 425px) {
            left: 0.8rem;
            padding: 1rem;
            width: 400px;
            top: 3.5rem;
        }
        @media (max-width: 400px) {
            left: 2.2rem;
            padding: 1rem;
            width: 330px;
            top: 3.5rem;
        }
        @media (max-width: 375px) {
            left: 0.8rem;
            padding: 1rem;
            width: 350px;
            top: 3.5rem;
        }
        @media (max-width: 320px) {
            left: 0.6rem;
            padding: 0.5rem;
            width: 300px;
            top: 3.5rem;
        }
    }
    .contactEmail{
        position: relative;
        left: 45rem;
        top: 5rem;
        max-width: 500px;
        border: solid 0.2rem #EEEEEE;
        padding: 2rem;
        border-radius: 2rem;
        @media (max-width: 1440px) {
            left: 30rem;
            top: 3rem;
        }
        @media (max-width: 1024px) {
            left: 17rem;
            top: 3.5rem;
        }
        @media (max-width: 768px) {
            left: 9rem;
            top: 5rem;
            padding: 1.5rem;
        }
        @media (max-width: 625px) {
            left: 4rem;
            padding: 1rem;
            width: 500px;
            top: 7rem;
        }
        @media (max-width: 525px) {
            left: 4rem;
            padding: 1rem;
            width: 400px;
            top: 5rem;
        }
        @media (max-width: 425px) {
            left: 0.8rem;
            padding: 1rem;
            width: 400px;
            top: 5rem;
        }
        @media (max-width: 400px) {
            left: 2.2rem;
            padding: 1rem;
            width: 330px;
            top: 5rem;
        }
        @media (max-width: 375px) {
            left: 0.8rem;
            padding: 1rem;
            width: 350px;
            top: 5rem;
        }
        @media (max-width: 320px) {
            left: 0.6rem;
            padding: 0.5rem;
            width: 300px;
            top: 5rem;
        }
    }
    .contact-button {
        position: relative;
        left: 11rem;
        @media (max-width: 425px) {
            left: 9rem;
        }
        @media (max-width: 375px) {
            left: 8rem;
        }
        @media (max-width: 320px) {
            left: 7rem;
        }
    }
`;

export default GlobalStyle