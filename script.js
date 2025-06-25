document.addEventListener('DOMContentLoaded',() =>{
  const songsData = [
    { name: 'Its My Life', 
      artist: 'Bon Jovi', 
      image: './img/Its my life-song.png',
      link:'https://open.spotify.com/intl-pt/track/0v1XpBHnsbkCn7iJ9Ucr1l' 
    },
    { name: 'Everybody Wants To Rule The World', 
      artist: 'Tears for Fears', 
      image: './img/ewtrtw-song.png',
      link:'https://open.spotify.com/intl-pt/track/4RvWPyQ5RL0ao9LPZeSouE' 
    },
    { name: 'Never Gonna Be Alone', 
      artist: 'Nickelback', 
      image: './img/never gonna be alone-song.png',
      link:'https://open.spotify.com/intl-pt/track/633LS2w2wpl0oNavVgTlMp' 
    },
    { name: 'Sugar', 
      artist: 'Robin Schulz', 
      image: './img/sugar-song.png', 
      link:'https://open.spotify.com/intl-pt/album/23XWXQAZVXGyRRpEmYOyQF'
    },
    { name: 'Remember The Time', 
      artist: 'Michael Jackson', 
      image: './img/remember the time.song.png',
      link:'https://open.spotify.com/intl-pt/track/4jnFqNWeJCeCRHc4HCdxfd' 
    },
    { name: 'Whyd You Only Call Me When Youre High', 
      artist: 'Arctic Monkeys', 
      image: './img/wdocmwyh-song.png', 
      link:'https://open.spotify.com/intl-pt/track/086myS9r57YsLbJpU0TgK9'
    },
    { name: 'HeartBeat', 
      artist: 'Childish Gambino', 
      image: './img/heartbeat-song.png',
      link:'https://open.spotify.com/intl-pt/track/5AGQSF0ytihJyt96K5vW9d' 
    },
    { name: 'Baby Boy', 
      artist: 'Sant, LP Beatzz', 
      image: './img/baby boy-song.png', 
      link:'https://open.spotify.com/intl-pt/track/6YkDNFdJpAXq3qgHYjPMCA'
    }];

  const artistsData = [
    { name: 'Michael Jackson', 
      image: './img/MJ-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/3fMbdgg4jU18AjLCKBhRSm'
    },
    { name: 'The Weeknd', 
      image: './img/the weeknd-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/1Xyo4u8uXC1ZmMpatF05PJ'
    },
    { name: 'Rihanna', 
      image: './img/rihanna-artist.png',
      link:'https://open.spotify.com/intl-pt/artist/5pKCCKE2ajJHZ9KAiaK11H'
    },
    { name: 'Chase Atlantic', 
      image: './img/chase atlantic-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/7cYEt1pqMgXJdq00hAwVpT'
    },
    { name: 'Ne-Yo', 
      image: './img/neyo-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/21E3waRsmPlU7jZsS13rcj'
    },
    { name: 'Pitbull', 
      image: './img/pitbull-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/0TnOYISbd1XYRBk9myaseg'
    },
    { name: 'Maroon 5', 
      image: './img/maroon 5-artist.png', 
      link:'https://open.spotify.com/intl-pt/artist/04gDigrS5kc9YWfZHwBETP'
    },  
    { name: 'Zayn', 
      image: './img/zayn-artist.png', 
     link: 'https://open.spotify.com/intl-pt/artist/5ZsFI1h6hIdQRw2ti0hz81'
    }
    ];


    const artistGrid = document.querySelector('.artists-grid');
    const songGrid = document.querySelector('.songs-grid');

    songsData.forEach( song => {
      const songsCard = document.createElement('div');
      songsCard.classList.add('songs-card');

      songsCard.innerHTML = `
         <a href="${song.link}" target="_blank"><img src="${song.image}" alt="musica do ${song.name}"></a>
        <div>
          <h3>${song.name}</h3>
          <p>${song.artist}</p>
        </div>
        
      `

      songGrid.appendChild(songsCard)
    })

    artistsData.forEach( artist => { // para cada item
      const artistCard = document.createElement('div'); //criou uma div
      artistCard.classList.add('artist-card'); //adiciona uma classe

      artistCard.innerHTML = ` 
        <a href="${artist.link}" target="_blank"><img src="${artist.image}" alt="imagem do ${artist.name}"></a>
        <div>
           <h3>${artist.name}</h3>
           <p>Artista<p/>
        </div>
        
      `
      //adicionou na div, a imagem, h3 e p

      artistGrid.appendChild(artistCard) //joga no HTML
    })


} )

