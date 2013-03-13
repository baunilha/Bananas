document.addEventListener('DOMContentLoaded',function(e){
var pop = Popcorn( '#jp_audio_0');

/////////////// !CHAPTER 1

pop.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter1'
		});
		return false;
	}
	
});

pop.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#c1-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


pop.text({
start: .1,
end: 64,
text:'',
target:'disco',
effect: 'applyclass',
applyclass: 'active'
});

pop.text({
start: 3.5,
end: 626,
text:'',
target:'c1-intro',
effect: 'applyclass',
applyclass: 'color'
});



/////////////// !photo 1

pop.code({
	start: 8,
	end: 8.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo1'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 2

pop.code({
	start: 13,
	end: 13.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo2'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 3

pop.code({
	start: 20,
	end: 20.5,
	onStart: function( options ) {   
		$.smoothScroll({
			speed: 2500,
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo3'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 4

pop.code({
	start: 27,
	end: 27.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo4'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 5

pop.code({
	start: 33,
	end: 33.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo5'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 6

pop.code({
	start: 38,
	end: 38.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			speed: 4500,
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo6'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 7

pop.code({
	start: 45,
	end: 45.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo7'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 7a

pop.code({
	start: 50,
	end: 50.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo7a'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 8

pop.code({
	start: 60,
	end: 60.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8a
pop.code({
	start: 65,
	end: 65.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8a'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8b
pop.code({
	start: 70,
	end: 70.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8b'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8c
pop.code({
	start: 75,
	end: 75.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8c'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8d
pop.code({
	start: 80,
	end: 80.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8d'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8e
pop.code({
	start: 85,
	end: 85.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8d'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8f
pop.code({
	start: 90,
	end: 90.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8f'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8g
pop.code({
	start: 95,
	end: 95.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8g'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8h
pop.code({
	start: 100,
	end: 100.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8h'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8i
pop.code({
	start: 105,
	end: 105.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8i'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8j
pop.code({
	start: 110,
	end: 110.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8j'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// !photo 8k --monkey video
pop.code({
	start: 115,
	end: 115.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo8k'
		});
		return false;
	},
	onEnd: function( options ) {}
});








// /////////////// !CHAPTER 2

// pop.text({
// start: 65.1,
// end: 116,
// text:'',
// target:'wit',
// effect: 'applyclass',
// applyclass: 'active'
// });

// pop.code({
// 	start: 65,
// 	end: 65.5,
// 	onStart: function( options ) {         
// 		$.smoothScroll({
// 			direction: 'left',
// 			scrollElement: $('#chapter1'),
// 			scrollTarget: '#c2-intro'
// 		});
// 		return false;
// 	},
// 	onEnd: function( options ) {}
// });

// /////////////// !photo 9a

// pop.code({
// 	start: 68.5,
// 	end: 70,
// 	onStart: function( options ) {         
// 		$.smoothScroll({
// 			direction: 'left',
// 			scrollElement: $('#chapter1'),
// 			scrollTarget: '#photo9a'
// 		});
// 		return false;
// 	},
// 	onEnd: function( options ) {}
// });

// /////////////// !photo 9

// pop.code({
// 	start: 74,
// 	end: 74.5,
// 	onStart: function( options ) {         
// 		$.smoothScroll({
// 			direction: 'left',
// 			scrollElement: $('#chapter1'),
// 			scrollTarget: '#photo9'
// 		});
// 		return false;
// 	},
// 	onEnd: function( options ) {}
// });

// /////////////// !photo 9b

// pop.code({
// 	start: 81,
// 	end: 81.5,
// 	onStart: function( options ) {         
// 		$.smoothScroll({
// 			direction: 'left',
// 			scrollElement: $('#chapter1'),
// 			scrollTarget: '#photo9b'
// 		});
// 		return false;
// 	},
// 	onEnd: function( options ) {}
// });

/////////////// !photo 10

pop.code({
	start: 120,
	end: 120.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo10'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 11

pop.code({
	start: 125,
	end: 125.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo11'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 12

pop.code({
	start: 130,
	end: 130.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo12'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 14

pop.code({
	start: 135,
	end: 135.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo14'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 15

pop.code({
	start: 140,
	end: 140.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo15'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 17

pop.code({
	start: 145,
	end: 145.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo17'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 3

pop.text({
start: 150,
end: 400,
text:'',
target:'ob',
effect: 'applyclass',
applyclass: 'active'
});

pop.code({
	start: 150,
	end: 150.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#c3-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 21

pop.code({
	start: 155,
	end: 155.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo21'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 22

pop.code({
	start: 160,
	end: 160.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo22'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 23

pop.code({
	start: 165,
	end: 165.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo23'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 24

pop.code({
	start: 170,
	end: 170.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo24'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 25

pop.code({
	start: 175,
	end: 175.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo25'
		});
		return false;
	},
	onEnd: function( options ) {}
});      

/////////////// !photo 26

pop.code({
	start: 180,
	end: 180.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo26'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 27

pop.code({
	start: 185,
	end: 185.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo27'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 29

pop.code({
	start: 190,
	end: 190.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo29'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 30

pop.code({
	start: 200,
	end: 200.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo30'
		});
		return false;
	},
	onEnd: function( options ) {}
});



/////////////// !photo 31

pop.code({
	start: 205,
	end: 205.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo31'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 33

pop.code({
	start: 210,
	end: 210.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo33'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 34

pop.code({
	start: 215,
	end: 215.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo34'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 35

pop.code({
	start: 220,
	end: 220.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo35'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 35b

pop.code({
	start: 223,
	end: 223.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo35b'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 36

pop.code({
	start: 228,
	end: 228.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo36'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 37

pop.code({
	start: 233,
	end: 233.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo37'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 38

pop.code({
	start: 238,
	end: 238.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo38'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 39

pop.code({
	start: 243,
	end: 243.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo39'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 40

pop.code({
	start: 248,
	end: 248.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo40'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 41

pop.code({
	start: 253,
	end: 253.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo41'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 42

pop.code({
	start: 258,
	end: 258.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo42'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 43

pop.code({
	start: 263,
	end: 263.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo43'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 45

pop.code({
	start: 268,
	end: 268.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo45'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 46

pop.code({
	start: 273,
	end: 273.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo46'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 47

pop.code({
	start: 278,
	end: 278.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo47'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 48

pop.code({
	start: 283,
	end: 283.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo48'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 49

pop.code({
	start: 288,
	end: 288.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo49'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 50

pop.code({
	start: 293,
	end: 293.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo50'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 4

pop.text({
start: 298.1,
end: 375,
text:'',
target:'myth',
effect: 'applyclass',
applyclass: 'active'
});

pop.code({
	start: 298,
	end: 298.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#c4-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 52

pop.code({
	start: 253,
	end: 253.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo52'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 53

pop.code({
	start: 254,
	end: 254.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo53'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 54

pop.code({
	start: 259,
	end: 259.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo54'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 55

pop.code({
	start: 265,
	end: 265.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo55'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 56

pop.code({
	start: 269,
	end: 269.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo56'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 57

pop.code({
	start: 274,
	end: 274.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo57'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 60

pop.code({
	start: 281,
	end: 281.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo60'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 61

pop.code({
	start: 285,
	end: 285.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo61'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 63

pop.code({
	start: 294,
	end: 294.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo63'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 64

pop.code({
	start: 299,
	end: 299.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo64'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 66

pop.code({
	start: 309,
	end: 309.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo66'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 67

pop.code({
	start: 313,
	end: 313.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo67'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 68

pop.code({
	start: 317,
	end: 317.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo68'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 69

pop.code({
	start: 321,
	end: 321.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo69'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 69b

pop.code({
	start: 326,
	end: 326.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo69b'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 70

pop.code({
	start: 330,
	end: 330.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo70'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 71

pop.code({
	start: 332,
	end: 332.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo71'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 72

pop.code({
	start: 333,
	end: 333.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#photo72'
		});
		return false;
	},
	onEnd: function( options ) {}
});

pop.code({
	start: 335,
	end: 335.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter1'),
			scrollTarget: '#c5-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// end     
},false);

