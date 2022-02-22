#app{
    display: flex;
    flex-direction: column;
}
.painel{
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px #ccc;
}

.scores{
    display: flex;
}
.score{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.score h1{
    font-weight: 300;
    font-size: 1.6rem;
}
.life-bar{
    width: 80%;
    height: 20px;
    border: 1px solid #AAA;
}

.life-bar .life { 
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: green;
}
.life-bar .life.danger{
    background-color: red;
}
.result{
    display: flex;
    border:  none;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 600;
}
.result .win{
    color: green;
} 
.result .lose{ 
    color: red;
}

.buttons{
    display: flex;
    justify-content: center;
}

.btn{
    padding: 5px 10px;
    margin:  0px 10px;
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    font-size: 1.1rem;
}
.new-game{
    background-color: #4253af;
    color: white;
}
.attack{
background-color: #e51c23;
color: white;
}
.especial-attack{
    background-color: #ff9800;
    color: white;
}
.heal{
background-color: #249b24;
color: white;
}
.give-up{
    background-color: #bbb;
    color: black;
}

.logs ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
}
.logs ul li{
    display: flex;
    justify-content: center;
    margin: 4px 0px;
    padding: 3px 0px;
    font-weight: 600;
    font-size: 1.1rem;
    text-transform:  uppercase;
    border-radius: 3px;
}

.player {
    background-color: #4253afaa;
    color: white;
}
.monster {
 background-color: #e51c23aa;
 color: white;
}
