const hostURL = `https://swift-shoes-spend.loca.lt`



async function newGame() {
  try{ 
    const response = await fetch(`${hostURL}/api/v1/pregame/newgame/Jude`, getNewGameCall())
    return response.json()
  } catch (error) {
    console.log("error fetching data")
  }
  }

  async function joinGame(username, code){
    try{ 
      const response = await fetch(`${hostURL}/api/v1/joingame/${code}`, getJoinGameCall())
      return response.json()
    } catch (error) {
      console.log("error joining game")
    }


  }
  

  async function gameStatus(code) {
    try {
      const response = await fetch(`${hostURL}/api/v1/pregame/${code}`, getGameStatus())
      return response.json()

    } catch (error) {
      console.log("error fetching status")
    }
    
  }
  
  // don't touch below this line

async function joinGamePress(username, code){
  const game = await joinGame(username, code)
}
  
async function onNewGamePress(){
  const game = await newGame();
  console.log(game);
  const code = game[0];
  console.log(`Fetched code: ${code}`);
  return code;
}
async function onGameStatusRefresh(code){
  const game = await gameStatus(code);
  if (game == undefined) {
    
  }
  // console.log(game);
  return game;
}

  function getGameStatus() {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    }
  }

  function getJoinGameCall(){
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: username

    }
  }
  
  function getNewGameCall() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

export default {onNewGamePress, onGameStatusRefresh, joinGamePress}
