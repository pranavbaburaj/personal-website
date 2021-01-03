export default class TypeWriter
{
	constructor(element)
	{
		this.element = element
		this.speed = 50
		this.text = element.innerHTML

		this.clearElement()
		this.start()
	}

	clearElement()
	{
		this.element.innerHTML = ""
	}

	start()
	{
		var index = 0;

		if (index < this.text.length)
		{
			this.element.innerHTML += this.text.charAt(index)
			index++
			setTimeout(this.start, this.speed)
		}
	}
}