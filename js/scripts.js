let character = {
	a:'\u4E39',
	b:'\u4E43',
	c:'\u4EA1',
	d:'\u5200',
	e:'\u4E47',
	f:'\u4E4D',
	g:'\u53B6',
	h:'\u5EFE',
	i:'\u5DE5',
	j:'\u4E85',
	k:'\u957F',
	l:'\u5315',
	m:'\u4ECE',
	n:'\u5182',
	o:'\u66F0',
	p:'\u5C38',
	q:'\u353F',
	r:'\u5C3A',
	s:'\u4E0E',
	t:'\u535E',
	u:'\u51F5',
	v:'\u30EC',
	w:'\u5C71',
	x:'\u4E42',
	y:'\u4E2B',
	z:'\u4E59'
}

// checkbox
document.querySelector('#double').addEventListener('click', () => {
	convert()
})

// input
document.querySelector('#input').addEventListener('input', () => {
	convert()
})

// convert text to moonrunes
let convert = () => {
	let input = document.querySelector('#input').value.toLowerCase()
	for(let key in character) {
		let reg = new RegExp(key, 'g')
		input = input.replace(reg, character[key])
	}
	if(document.querySelector('#double').checked) {
		input = input.replace(/ /g, '  ')
	}

	document.querySelector('#output').value = input
	$('#output').trigger('autoresize')
}

// sample text
document.querySelector('#sample').addEventListener('mouseover', () => {
	document.querySelector('span').classList.add('spin')
})

// focus Input
let focus = (() => {
	document.querySelector('#input').focus()
})()
