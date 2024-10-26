            // For only one element
// var firsttt = document.querySelector('#firsttext').textContent

// var splittedText = firsttt.split("")
// var clutter = "";
// splittedText.forEach(function(elem){
//    clutter += `<span>${elem}</span>`
// })
// document.querySelector('#firsttext').innerHTML = clutter

 var allH1 = document.querySelectorAll('#page2 h1')
 allH1.forEach(function(elem){
    var clutter =""
   var h1Text = elem.textContent
   var splittedText = h1Text.split("")
   splittedText.forEach(function(e){
   clutter += `<span>${e}</span>`
   })
    elem.innerHTML = clutter
 })

 gsap.to('#page2 h1 span',{
    color:'#E3E3C4',
    stagger:0.1,
    scrollTrigger:{
       trigger:"#page2 h1",
       scroller:'body',
       start:'Top 40%',
       end: "top -20%",
       scrub: 2
    }
 })