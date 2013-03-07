document.addEventListener('DOMContentLoaded',function(e){
var fac = Popcorn( '#jp_audio_1');

/////////////// !CHAPTER 1

fac.code({
	start: .1,
	onStart: function( options ) {         
		$.smoothScroll({
			scrollTarget: '#chapter2'
		});
		return false;
	}
	
});

fac.code({
	start: 1,
	end: 1.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#c2-intro'
		});
		return false;
	},
	onEnd: function( options ) {}
	
});


fac.text({
start: .1,
end: 64,
text:'',
target:'wit',
effect: 'applyclass',
applyclass: 'active'
});

fac.text({
start: 5.5,
end: 326,
text:'',
target:'c2-intro',
effect: 'applyclass',
applyclass: 'color'
});



/////////////// !photo 1

fac.code({
	start: 2,
	end: 2.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#peel'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 9

fac.code({
	start: 9,
	end: 9.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#filter'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 9b

fac.code({
	start: 10,
	end: 10.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bite'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 10

fac.code({
	start: 11,
	end: 11.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#shoes'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 11

fac.code({
	start: 12,
	end: 12.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#ink'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 12

fac.code({
	start: 13,
	end: 13.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#cd'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 14

fac.code({
	start: 14,
	end: 14.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#bikini'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 15

fac.code({
	start: 15,
	end: 15.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#photo15'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !photo 17

fac.code({
	start: 16,
	end: 16.5,
	onStart: function( options ) {         
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('#chapter2'),
			scrollTarget: '#photo17'
		});
		return false;
	},
	onEnd: function( options ) {}
});

/////////////// !CHAPTER 3

fac.text({
start: 117,
end: 243,
text:'',
target:'ob',
effect: 'applyclass',
applyclass: 'active'
});

fac.code({
	start: 117,
	end: 117.5,
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

fac.code({
	start: 122,
	end: 122.5,
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

fac.code({
	start: 124,
	end: 124.5,
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

fac.code({
	start: 126,
	end: 126.5,
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

fac.code({
	start: 129,
	end: 129.5,
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

fac.code({
	start: 132,
	end: 132.5,
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

fac.code({
	start: 135,
	end: 135.5,
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

fac.code({
	start: 138,
	end: 138.5,
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

fac.code({
	start: 141,
	end: 141.5,
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

fac.code({
	start: 143,
	end: 143.5,
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

fac.code({
	start: 144,
	end: 144.5,
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

fac.code({
	start: 147,
	end: 147.5,
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

fac.code({
	start: 153,
	end: 153.5,
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

fac.code({
	start: 158,
	end: 158.5,
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

fac.code({
	start: 166,
	end: 166.5,
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

fac.code({
	start: 172,
	end: 172.5,
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

fac.code({
	start: 178,
	end: 178.5,
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

fac.code({
	start: 186,
	end: 186.5,
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

fac.code({
	start: 189,
	end: 189.5,
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

fac.code({
	start: 192,
	end: 192.5,
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

fac.code({
	start: 195,
	end: 195.5,
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

fac.code({
	start: 202,
	end: 202.5,
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

fac.code({
	start: 206,
	end: 206.5,
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

fac.code({
	start: 213,
	end: 213.5,
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

fac.code({
	start: 216,
	end: 216.5,
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

fac.code({
	start: 221,
	end: 221.5,
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

fac.code({
	start: 225,
	end: 225.5,
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

fac.code({
	start: 229,
	end: 229.5,
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

fac.code({
	start: 235,
	end: 235.5,
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

fac.text({
start: 243.1,
end: 335,
text:'',
target:'myth',
effect: 'applyclass',
applyclass: 'active'
});

fac.code({
	start: 243,
	end: 243.5,
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

fac.code({
	start: 248,
	end: 248.5,
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

fac.code({
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

