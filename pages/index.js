/*
Author: TheJewGamer
Date: 10/9/2022
File: index.js
*/ 

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  //vars
  var PlayersList= []
  var currentStrat
  var currentPlayer

  //round tracking vars
  var onAttack = true
  var roundNumber = 0;


  //scripts

  const SaveNames = () => {

    //add names to array if not empty string
    if(document.getElementById('Player1Name').value == false)
    {
      alert('The Player 1 Name field must be filled out')
    }
    else
    {
      PlayersList.push(document.getElementById('Player1Name').value)

      if(document.getElementById('Player2Name').value)
      {
        PlayersList.push(document.getElementById('Player2Name').value)
      }

      if(document.getElementById('Player3Name').value)
      {
        PlayersList.push(document.getElementById('Player3Name').value)
      }

      if(document.getElementById('Player4Name').value)
      {
        PlayersList.push(document.getElementById('Player4Name').value)
      }

      if(document.getElementById('Player5Name').value)
      {
        PlayersList.push(document.getElementById('Player5Name').value)
      }

      //hide form
      document.getElementById("PlayerNamesForm").toggleAttribute("hidden")

      //update text
      document.getElementById("stratDescription").textContent = "Choose what side you start on."

      //show attack and defense buttons
      document.getElementById("AttackButton").toggleAttribute("hidden")
      document.getElementById("DefenseButton").toggleAttribute("hidden")
    }
  }

  const SetAttack = () => {
    onAttack = true
    document.getElementById("AttackButton").toggleAttribute("hidden")
    document.getElementById("DefenseButton").toggleAttribute("hidden")
    document.getElementById("StratButton").toggleAttribute("hidden")
    document.getElementById("RestartButton").toggleAttribute("hidden")
    document.getElementById("SideText").toggleAttribute("hidden")
    document.getElementById("SideText").textContent = "On Attack"

    //get a Strat
    getStrat()

  }

  const SetDefense = () => {
    onAttack = false
    document.getElementById("AttackButton").toggleAttribute("hidden")
    document.getElementById("DefenseButton").toggleAttribute("hidden")
    document.getElementById("StratButton").toggleAttribute("hidden")
    document.getElementById("RestartButton").toggleAttribute("hidden")
    document.getElementById("SideText").toggleAttribute("hidden")
    document.getElementById("SideText").textContent = "On Defense"

    //get a Strat
    getStrat()
  }

  const Restart = () => {
    document.getElementById("StratButton").toggleAttribute("hidden");
    document.getElementById("RestartButton").toggleAttribute("hidden");

    //show form
    //hide form
    document.getElementById("PlayerNamesForm").toggleAttribute("hidden")
    
    //reset text
    document.getElementById("stratTitle").textContent = "Valorant Strat Roulette"
    document.getElementById("SideText").toggleAttribute("hidden")
    document.getElementById("stratDescription").textContent = "This site will randomly choose a strat for you and your team to do in Valorant.\nTo start choose enter the names of the players on your team."

    roundNumber = 0
  }


  const getStrat = () => {
    
    //get player name in case it is needed
    currentPlayer = PlayersList[Math.floor(Math.random() * PlayersList.length)]

    var globalStrats = [
      ['Dead Coms', currentPlayer + ' can only communicate by text chat.'],
      ['Backseat Gamers', 'When a player dies they must criticize who ever they spectating through voice chat'],
      ['Good Coms', "Players must use generic terms when giving call outs"],
      ['Marching Band', 'Players can only move when ' + currentPlayer + ' is signing'],
      ['A Piece of Candy', 'If players see a new gun on the floor the must go over and pick it up. Players cannot attack while trying to pick up a gun.'],
      ['Tag', 'If a player kills someone they must run back to spawn immediately before they are able to keep playing as normal. While players are running back to spawn they cannot attack.'],
      ['Sharing is caring', 'Players must share one gun between the entire team. Players without the gun are allowed to use their knife and abilities.'],
      ['Cannot stop running', 'Player must always be running, even when shooting.']
      ['Reloader', 'Only ' + currentPlayer + ' can reload weapons and cannot attack. Other players must give him weapons to reload. If PLAYER dies then guns cannot be reloaded'],
      ['Freeze Tag', 'Players must stand still after they get a kill. Once another player knifes them they can move again.'],
      ['CSGO', 'No abilities are allowed for the round.'],
      ['Sneaky Beaky Like', 'Players must be crouched the entire round'],
      ['Point Click Adventure', "Players can only use the Marshal or Operator for the round."],
      ['Single File Line', "Players move together in a line for the entire match"],
      ['Overlord', currentPlayer + ' is the only one who can talk for the round'],
      ['Weakest Link', "Players cannot spend more money than the poorest player on their team."],
      ['Burner', "Players must discard a weapon if they get a kill with it. Players cannot pick this weapon back up."],
      ['I love it when plan comes together', "Make a plan and stick to it."],
      ['Mine Checking', "Players can only stand where they shot"],
      ['In Working Order', 'If players get a kill they must inspect their gun and wait for it to finish before they can attack again'],
      ['In the Loop', 'Players must call out their actions. This includes shooting, moving, attacking'],
      ['Weeping Angle', "If you can see an enemy players you cannot move"],
      ['With the right load', "Players can only use shotguns for the round, no abilities."],
      ['New Sherif in Town', "Players can only use the sherif for the round"],
      ['Kill Confirmed', 'Players must call out the exact name of the player they killed before moving again'],
      ['Standard Kit', currentPlayer + ' chooses a weapon, all players must only use this weapon.'],
      ['Rules of Engagement', "Players cannot attack another player until they are attacked by said player."],
      ['Morning the dead', "Players must say something in remembrance when a player on their team dies."],
      ['Luck of the Draw', "Players must have their knife out unless they are shooting."],
      ['The Pile', "Players must all buy weapons and then throw all weapons in a pile. Players then jump into the pile and must use the weapons they get for the round"],
      ['Pinging', 'Players must ping where they are moving to.'],
      ['Gunslinger', "Players must by a sherif and a marshal and cannot ADS. Players who cannot afford these weapons must use their knife."],
      ['COD Gun', "Players must buy a gun with ADS capability and ADS for the entire round."],
      ['Suppressed', "Players can only use guns with a suppressor attached."],
      ['Opposite Day', 'Players must say the opposite of what they mean'],
      ['Belt Fed', 'Players must by a LMG and once fired cannot stop firing until they reload.'],
      ['Pep Talk', 'For the first 10 seconds of the round ' + currentPlayer + ' must give a pep talk. Players must wait till the pep talk is over before moving'],
      ['Round of Applause', "Players must clap for 3 seconds after a player on your team gets a kill"]
    ]
  
  
    var globalStrats_Attack = [
      ['Mr.President Get Down', currentPlayer + ' is the President and must grab the spike and drop all their weapons and cannot attack. The President will pick a site and all other players must guard the president to said site so they can plant the spike. If the president dies remaning players must make a final stand at their body.'],
      ['Stand your ground', "Players cannot move once spike is planted. Players must try to plant the spike."],
      ['Rush B no stop', "Players must rush B without stopping"],
      ['Its a Dud', 'Players cannot plant the spike']
    ]
  
    var globalStrats_Defense = [
      ['Eviction Notice', 'Player cannot attack until the other team plants the spike. After the spike is planted players must retake the site.'],
      ['Red Alert', "If the spike is planted players must constantly mentioned that the spike is planted"],
      ['A Good Defense...', "Players must rush the enemy spawn"],
      ['Protection Duty', currentPlayer + ' chooses a site to protect. All players must stay at this site until spike is planted.'],
      ['What key is it?', 'Players must ask what key it is to defuse the spike before they can defuse it.'],
    ]
  
    //combine arrays
    globalStrats_Attack = globalStrats_Attack.concat(globalStrats) 
    globalStrats_Defense = globalStrats_Defense.concat(globalStrats)

    //check what side player is on
    if(onAttack)
    {
      currentStrat = globalStrats_Attack[Math.floor(Math.random() * globalStrats_Attack.length) - 1]
      document.getElementById("SideText").textContent = "On Attack"
    }
    //on defense
    else
    {
      currentStrat = globalStrats_Attack[Math.floor(Math.random() * globalStrats_Attack.length) - 1]
      document.getElementById("SideText").textContent = "On Defense"
    }

    console.log(currentStrat)

    //update strat Text
    document.getElementById("stratTitle").textContent = currentStrat[0]
    document.getElementById("stratDescription").textContent = currentStrat[1]

    //inc round number 
    roundNumber = roundNumber + 1

    //see if sides should be switched
    if(roundNumber == 12)
    {
      //invert bool
      onAttack = !onAttack
    }
    
  }

  //html
  return (
    <div className={styles.container}>
      <Head>
        <title>Valorant Strat Roulette</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 id='stratTitle' className={styles.title}>
          Valorant Strat Roulette
        </h1>
        <h2 id="SideText" hidden></h2>
        <p id='stratDescription' className={styles.description}>
          This site will randomly choose a strat for you and your team to do in Valorant.<br></br>To start enter the names of the players on your team.
        </p>

        <div id="PlayerNamesForm">
          <form>
            <label>Player 1 Name</label>
            <input type="text" id="Player1Name"/>

            <label>Player 2 Name</label>
            <input type="text" id="Player2Name"/>

            <label>Player 3 Name</label>
            <input type="text" id="Player3Name"/>

            <label>Player 4 Name</label>
            <input type="text" id="Player4Name"/>

            <label>Player 5 Name</label>
            <input type="text" id="Player5Name"/>
            <button type="button" onClick={SaveNames}>Submit</button>
          </form>
        </div>


        <div className={styles.grid}>

          <a id="AttackButton" hidden onClick={SetAttack} className={styles.card}>
            <h2>Start on Attack &rarr;</h2>
            <p>You are starting on Attack.</p>
          </a>

          <a id="DefenseButton" hidden onClick={SetDefense} className={styles.card}>
            <h2>Start on Defense &rarr;</h2>
            <p>You are starting on Defense.</p>
          </a>

          <a id="RestartButton" hidden onClick={Restart} className={styles.card}>
            <h2>Restart&rarr;</h2>
            <p>Game Over?. Another one?</p>
          </a>

          <a id="StratButton" hidden onClick={getStrat} className={styles.card}>
            <h2>Get Strat &rarr;</h2>
            <p>Generate a New Strat.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/TheJewGamer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by TheJewGamer using Next.js
        </a>
      </footer>
    </div>
  )
}
