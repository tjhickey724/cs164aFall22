

texture0 = new Texture('/images/grass.png')
texture1 = new Texture('/images/sky.jpg')
texture2 = new Texture('/images/earth.jpg')
document.getElementById('title').innerHTML="demo1e.js"

function runTest(){
	screenW=100
	screenH=100
	canvas1.width=screenW
	canvas1.height=screenH
	canvas2.width=screenW
	canvas2.height=screenH
	canvas3.width=screenW
	canvas3.height=screenH
	canvas4.width=screenW
	canvas4.height=screenH
	imageW=100
	imageH=100
	const rendererFront = new Renderer(imageW,imageH,'canvas1')
	const rendererRight = new Renderer(imageW,imageH,'canvas2')
	const rendererTop = new Renderer(imageW,imageH, 'canvas3')
	const renderer = new Renderer(imageW,imageH, 'canvas4')
	//const rendererCam = new Renderer(300,300, 'canvas4')
	const cameraFront = new Camera()
	const cameraRight = new Camera()
	cameraTop = new Camera()
	const camera = new Camera()

	const origin = new Vector3(0,0,0)
	const e = 4
	const o = 0.2
	cameraFront.translate(new Vector3(o,o,e)); cameraFront.lookAt(origin)
	cameraRight.translate(new Vector3(e,o,o)); cameraRight.lookAt(origin)
	cameraTop.translate(  new Vector3(o,e,o)); cameraTop.lookAt(origin)
	camera.translate(  new Vector3(e,e+o,e)); camera.lookAt(origin)
	const scene = new Scene('demo1c')

	const mat0 = Material.standard()
	mat0.texture = texture0
	mat0.textureWeight = 0.5
	mat0.texture.repeatU=4
	mat0.texture.repeatV=4

	const mat1 = Material.standard()
	mat1.texture = texture1
	mat1.textureWeight = 0.5
	mat1.texture.repeatU=1
	mat1.texture.repeatV=1

	const mat2 = Material.standard()
	mat2.texture = texture2
	mat2.textureWeight = 0.5
	mat2.texture.repeatU=1
	mat2.texture.repeatV=1




	//const s1 = new Sphere(new Vector3(-2,0,-80),20)
	//const s2 = new Sphere(new Vector3(-50,0,-80),10)
	const s0 = new Sphere()
	s0.material = mat2
	//s0.scale(new Vector3(2,2,2))
  s0.translate(new Vector3(1,1,1))
	//s0.translate(new Vector3(25,5,25)).scale(new Vector3(3,3,3))
	scene.addObject(s0)

	const w = 4
	const h = 0.5
	const d = 4
	const g = 8

	const ground = new Square()
	ground.material = mat0
	ground
  	.scale(new Vector3(g,1,g))
	  .rotateX(0.5*Math.PI)
		.translate(new Vector3(-1/2,-1/2,0))
	scene.addObject(ground)

	const back = new Square()
	back.material=mat1
	back.scale(new Vector3(w,h,1))
	scene.addObject(back)

	const left = new Square()
	left.material = mat2
	left.translate(new Vector3(0,0,0))
	left.rotateY(-0.5*Math.PI)
	left.scale(new Vector3(d,h,1))
	left.translate(new Vector3(0,0.5,0))
	scene.addObject(left)




	const intensity = 0.75

	const light1 = new Light(new Vector3(-10,10,10))
	light1.intensity = intensity
	light1.diffuseColor = Color.WHITE
	light1.specularColor = Color.RED
	scene.addLight(light1)

	const light2 = new Light(new Vector3(20,20,20))
	light2.intensity = intensity
	light2.diffuseColor = Color.WHITE
	light2.specularColor = Color.BLUE
	scene.addLight(light2)



	const lightCam = new Light(camera.position)
	lightCam.intensity = intensity
	lightCam.diffuseColor = Color.WHITE
	lightCam.specularColor = Color.BLUE
	//scene.addLight(lightCam)

	const lightFront = new Light(cameraFront.position)
	lightFront.intensity = intensity
	lightFront.diffuseColor = Color.WHITE
	lightFront.specularColor = Color.BLUE
	//scene.addLight(lightFront)

	const lightTop = new Light(cameraTop.position)
	lightTop.intensity = intensity
	lightTop.diffuseColor = Color.WHITE
	lightTop.specularColor = Color.BLUE
	//scene.addLight(lightTop)

	const lightRight = new Light(cameraRight.position)
	lightRight.intensity = intensity
	lightRight.diffuseColor = Color.WHITE
	lightRight.specularColor = Color.BLUE
	//scene.addLight(lightRight)

	rendererFront.render(scene,cameraFront)
	rendererRight.render(scene,cameraRight)
	  rendererTop.render(scene,cameraTop)
	renderer.render(scene,camera)
}

setTimeout(runTest, 1000)
