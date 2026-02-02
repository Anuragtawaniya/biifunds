function initAudioPlayers() {
        const audioElements = Array.from(document.querySelectorAll('audio:not(.plyr-initialized)'));
        const newPlayers = [];
      
        audioElements.forEach(audio => {
          const player = new Plyr(audio);
          audio.classList.add('plyr-initialized');      
          player.on('play', () => {
            if (!window.players) return;
            window.players.forEach(p => {
              if (p.media !== player.media && !p.media.paused) {
                p.pause();
              }
            });
          });
      
          newPlayers.push(player);
        });      
        // Merge with existing players
        window.players = (window.players || []).concat(newPlayers);
      }      
      