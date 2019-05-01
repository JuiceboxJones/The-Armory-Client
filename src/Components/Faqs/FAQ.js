import React from 'react';
import './faq.css'

export default function FAQ (props) {
  const email = 'armorysquad@gmail.com'
  return(
    <div className='faq-container'>
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>What is Squad Armory?</li>
        <p>Squad Armory is a website designed to help individuals find groups of people to play games with.
          We know that playing games online, by yourself, or with random teams can get frustrating. Squad Armory wants to help you
          have fun and find your squad.
        </p>

        <li>How do I use your site?</li>
        <p>Using our site is easy. Sign up to view games, and available parties. 
          You must confirm your email if you wish to join or create a party. Once youve joined a party,
           you can participate in a chat between your squad-mates.</p>

        <li>Will you add more games?</li>
        <p>We will add games that we feel are trending at the time. 
          If you have a title that you would like to see listed, feel free to contact us.</p>

        <li>Why should I use this service rather than Discord or Twitch?</li>
        <p>You shouldn't. Squad Armory isn't trying to replace the need for such services. 
          In fact, the party chat was put in place so that you could share usernames and decide on a venue for your in game chat. 
          We are simpily here to make finding friends easy.</p>

        <li>Need to ask a question?</li>
        <a href={`mailto:${email}`}>Contact Us</a>
      </ul>
        <button onClick={e => props.history.goBack()}>Back</button>
    </div>
  )
}