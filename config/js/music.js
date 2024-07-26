  // 创建一个对象来存储每个图片的Audio实例
  var audioPlayers = {};
  
  function toggleMusic(imageId, musicFile) {
      // 如果这个图片的Audio实例不存在，则创建一个
      if (!audioPlayers[imageId]) {
          audioPlayers[imageId] = new Audio(musicFile);
      }
  
      var audio = audioPlayers[imageId];
  
      // 如果音频正在播放，则停止它；否则，播放它
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
          // 如果需要，你也可以将播放位置重置到开始
          // audio.currentTime = 0;
      }
  }