let character = {
	a:'\u4E39',
	b:'\u4E43',
	c:'\u4EA1',
	d:'\u5200',
	e:'\u6B63',
	f:'\u4E4D',
	g:'\uB354',
	h:'\u5EFE',
	i:'\u5DE5',
	j:'\u4E85',
	k:'\u3093',
	l:'\u5315',
	m:'\u96E8',
	n:'\u5182',
	o:'\u66F0',
	p:'\u5369',
	q:'\uB2E4',
	r:'\u5C3A',
	s:'\u4E0E',
	t:'\u535E',
	u:'\uB2C8',
	v:'\u30EC',
	w:'\u5C71',
	x:'\u7236',
	y:'\u30BD',
	z:'\u4E59'
}

// button
document.querySelector('#convert').addEventListener('click', () => {
	convert()
})

// checkboxes
document.querySelector('#update').addEventListener('click', () => {
	if(document.querySelector('#update').checked) {
		document.querySelector('#convert').setAttribute('disabled', '') // disable button
	}
	else {
        document.querySelector('#convert').removeAttribute('disabled') // enable button
	}
})
document.querySelector('#double').addEventListener('click', () => {
	convert()
})

// input
document.querySelector('#input').addEventListener('input', () => {
	if(document.querySelector('#update').checked) {
		convert()
	}
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
}
