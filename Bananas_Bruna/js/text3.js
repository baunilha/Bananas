document.addEventListener('DOMContentLoaded',function(e){
var hist = Popcorn( '#jp_audio_2');

/////////////// !CHAPTER 1

hist.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter3'
		});
		return false;
	}
	
});

hist.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c3-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


hist.text({
start: .1,
end: 64,
text:'',
target:'disco',
effect: 'applyclass',
applyclass: 'active'
});

hist.text({
start: 5.5,
end: 326,
text:'',
target:'c3-intro',
effect: 'applyclass',
applyclass: 'color'
});



/////////////// !photo 1

hist.code({
	start: 6,
	end: 8.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo1'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 2

hist.code({
	start: 19,
	end: 19.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo2'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 3

hist.code({
	start: 20,
	end: 20.5,
	onStart: function( options ) {   
		$.smoothScroll({
			speed: 2500,
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo3'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 4

hist.code({
	start: 27,
	end: 27.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo4'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 5

hist.code({
	start: 33,
	end: 33.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo5'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 6

hist.code({
	start: 43,
	end: 43.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			speed: 4500,
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo6'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 7

hist.code({
	start: 55,
	end: 55.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo7'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 8

hist.code({
	start: 60,
	end: 60.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo8'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 2

hist.text({
start: 65.1,
end: 116,
text:'',
target:'wit',
effect: 'applyclass',
applyclass: 'active'
});

hist.code({
	start: 65,
	end: 65.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c2-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 9a

hist.code({
	start: 68.5,
	end: 70,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#peel'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 9

hist.code({
	start: 74,
	end: 74.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#filter'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 9b

hist.code({
	start: 81,
	end: 81.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#bite'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 10

hist.code({
	start: 88,
	end: 88.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#shoes'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 11

hist.code({
	start: 102,
	end: 102.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#ink'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 12

hist.code({
	start: 108,
	end: 108.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#cd'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 14

hist.code({
	start: 111,
	end: 111.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo14'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 15

hist.code({
	start: 113,
	end: 113.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo15'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 17

hist.code({
	start: 115,
	end: 115.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo17'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 3

hist.text({
start: 117,
end: 243,
text:'',
target:'ob',
effect: 'applyclass',
applyclass: 'active'
});

hist.code({
	start: 117,
	end: 117.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c3-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 21

hist.code({
	start: 122,
	end: 122.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo21'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 22

hist.code({
	start: 124,
	end: 124.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo22'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 23

hist.code({
	start: 126,
	end: 126.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo23'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 24

hist.code({
	start: 129,
	end: 129.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo24'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 25

hist.code({
	start: 132,
	end: 132.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo25'
		});
		return false;
	},
	onEnd: function( options ) {}
});      

/////////////// !photo 26

hist.code({
	start: 135,
	end: 135.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo26'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 27

hist.code({
	start: 138,
	end: 138.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo27'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 29

hist.code({
	start: 141,
	end: 141.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo29'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 30

hist.code({
	start: 143,
	end: 143.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo30'
		});
		return false;
	},
	onEnd: function( options ) {}
});



/////////////// !photo 31

hist.code({
	start: 144,
	end: 144.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo31'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 33

hist.code({
	start: 147,
	end: 147.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo33'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 34

hist.code({
	start: 153,
	end: 153.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo34'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 35

hist.code({
	start: 158,
	end: 158.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo35'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 35b

hist.code({
	start: 166,
	end: 166.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo35b'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 36

hist.code({
	start: 172,
	end: 172.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo36'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 37

hist.code({
	start: 178,
	end: 178.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo37'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 38

hist.code({
	start: 186,
	end: 186.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo38'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 39

hist.code({
	start: 189,
	end: 189.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo39'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 40

hist.code({
	start: 192,
	end: 192.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo40'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 41

hist.code({
	start: 195,
	end: 195.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo41'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 42

hist.code({
	start: 202,
	end: 202.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo42'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 43

hist.code({
	start: 206,
	end: 206.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo43'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 45

hist.code({
	start: 213,
	end: 213.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo45'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 46

hist.code({
	start: 216,
	end: 216.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo46'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 47

hist.code({
	start: 221,
	end: 221.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo47'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 48

hist.code({
	start: 225,
	end: 225.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo48'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 49

hist.code({
	start: 229,
	end: 229.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo49'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 50

hist.code({
	start: 235,
	end: 235.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo50'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 4

hist.text({
start: 243.1,
end: 335,
text:'',
target:'myth',
effect: 'applyclass',
applyclass: 'active'
});

hist.code({
	start: 243,
	end: 243.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c4-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 52

hist.code({
	start: 248,
	end: 248.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo52'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 53

hist.code({
	start: 254,
	end: 254.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo53'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 54

hist.code({
	start: 259,
	end: 259.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo54'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 55

hist.code({
	start: 265,
	end: 265.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo55'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 56

hist.code({
	start: 269,
	end: 269.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo56'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 57

hist.code({
	start: 274,
	end: 274.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo57'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 60

hist.code({
	start: 281,
	end: 281.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo60'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 61

hist.code({
	start: 285,
	end: 285.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo61'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 63

hist.code({
	start: 294,
	end: 294.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo63'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 64

hist.code({
	start: 299,
	end: 299.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo64'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 66

hist.code({
	start: 309,
	end: 309.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo66'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 67

hist.code({
	start: 313,
	end: 313.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo67'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 68

hist.code({
	start: 317,
	end: 317.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo68'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 69

hist.code({
	start: 321,
	end: 321.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo69'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 69b

hist.code({
	start: 326,
	end: 326.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo69b'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 70

hist.code({
	start: 330,
	end: 330.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo70'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 71

hist.code({
	start: 332,
	end: 332.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo71'
		});
		return false;
	},
	onEnd: function( options ) {}
});


/////////////// !photo 72

hist.code({
	start: 333,
	end: 333.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#photo72'
		});
		return false;
	},
	onEnd: function( options ) {}
});

hist.code({
	start: 335,
	end: 335.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter3'),
			scrollTarget: '#c5-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
});
/////////////// end     
},false);
