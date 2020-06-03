

   fetch(`https://picsum.photos/id/200/info`).then((response) => {

     return response.json();

   }).then((responseJson) => {
      const a=responseJson;
     //injectInfo(responseJson);
     console.log(a);
    
      $(".tl").html(a.author)
      $('.dn1').attr('href',a.download_url)
      
    
      $('#img1').attr('src',a.download_url)
      $(".t2").html(a.author)
      $('.dn2').attr('href',a.download_url)
      
    
      $('#img2').attr('src',a.download_url)
      
      $(".t3").html(a.author);
      $('.dn3').attr('href',a.download_url)
    
      $('#img3').attr('src',a.download_url)
      
      

        // document.querySelector('img').src=a.url
     //  load(responseJson)
   });

    