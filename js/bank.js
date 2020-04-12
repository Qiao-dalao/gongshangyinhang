
window.onload=function(){
	
	window.onscroll=function(){
		var menu = document.getElementsByClassName('menu')[0]
		var aaa = document.documentElement.scrollTop
		var backtop = document.getElementsByClassName('backtop')[0]
		var backtopimg = document.getElementsByClassName('backtop-img')[0]
			//固定定位
			if(aaa>140){
				menu.style.position='fixed'
				menu.style.top='0'
			}else{
				menu.style.position=''
			}
			//返回顶部
			if(aaa>1100){
				backtop.style.display='block'
			}else{
				backtop.style.display='none'
			}
		
			backtop.onmouseover=function(){
				backtopimg.src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav2_b.png'
			}
			backtopimg.onmouseout=function(){
				backtopimg.src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav2.png'
			}
			backtopimg.onclick=function(){
				window.scrollTo(0,0);
			}
	}

	//定位栏出现
	var yewu = document.getElementsByClassName('yewu')
	var erji1 = document.getElementsByClassName('erji1')
	
	for(var i=0;i<yewu.length;i++){
		yewu[i].a = i
		yewu[i].onmouseover=function(){
			erji1[this.a].style.display='block'
			this.style.background='rgb(175,8,18)'
			this.style.position=''
			}
		yewu[i].onmouseout=function(){
			this.style.background='#c7000b'
			erji1[this.a].style.display='none'
			this.style.position='relative'
		}
	}
	//查询栏出现
	var tubiao = document.getElementsByClassName('tubiao')
	var search = document.getElementsByClassName('search-js')
	var servertan = document.getElementsByClassName('server-tan')
	var zhiserver = document.getElementsByClassName('zhiserver')[0]
	for(var i=0;i<search.length;i++){
		search[i].b = i
		search[i].onmousemove=function(){
			tubiao[this.b].style.width='70px'
			servertan[this.b].style.display='block'
			zhiserver.style.bottom='-75px'
//			tubiao[this.b].style.transition='500ms'
			zhiserver.style.transition='0ms'
		}
		search[i].onmouseout=function(){
			tubiao[this.b].style.width='60px'
			servertan[this.b].style.display='none'
			zhiserver.style.bottom='-85px'
		}
	}
	//通告轮播
	var mousemove = document.getElementById('mousemove')
	var lunboimg = document.getElementsByClassName('lunboimage')[0].offsetWidth;
	var anniu = document.getElementsByClassName('anniu')
	var lunboallimg =document.getElementsByClassName('lunboimage')
	var left=0
	var num=1
	var timer
	function lunbo1(){
		timer = setInterval(function(){
			for(var i=0;i<anniu.length;i++){
				anniu[i].style.background='#CCCCCC'
				anniu[i].d=i
				anniu[i].onclick=function(){
					for(var j=0;j<anniu.length;j++){
						anniu[j].style.background='#CCCCCC'
					}
					clearInterval(timer)
					mousemove.style.left=-lunboimg*(this.d)+'px'
					this.style.background='#bc0021'	
					num=this.d
				}
			}
			if(num>5){
				num=0
				anniu[num].style.background='#bc0021'
				mousemove.style.transition='500ms'
				
				mousemove.style.left='0px'
				num=1
			}else{
				
				anniu[num].style.background='#bc0021'
				mousemove.style.transition='500ms'
				left=-lunboimg*num
				mousemove.style.left=left+'px'
				num++
			}

		},2000)
	}
	lunbo1()
	mousemove.onmouseover=function(){
		clearInterval(timer)
	}
	mousemove.onmouseout=function(){
		lunbo1()
	}
	//广告轮播
	var lunbo2 =document.getElementById('lunbo2')
	var lunbo2allimg =document.getElementsByClassName('lunbo2img')
	var lunbo2anniu = document.getElementsByClassName('lunbo2-anniu')
	var lunbo2img = document.getElementsByClassName('lunbo2img')[0].offsetWidth
	var left2=0
	var num1=1
	var timer2
	function lunbo2a(){
		timer2=setInterval(function(){
		for(var i=0;i<lunbo2anniu.length;i++){
			lunbo2anniu[i].style.background='#e5e5e5'
			lunbo2anniu[i].f=i
			lunbo2anniu[i].onclick=function(){
				for(var j=0;j<lunbo2anniu.length;j++){	
					lunbo2anniu[j].style.background='#e5e5e5'
				}
				clearInterval(timer2)
				lunbo2.style.left=-lunbo2img*(this.f)+'px'
				this.style.background='#c7000b'
				
				num1=this.f
				
				
			}
		}
		if(num1>=3){
			num1=0
			lunbo2anniu[num1].style.background='#c7000b'
			lunbo2.style.left='0px'
			num1=1
		}else{
			lunbo2anniu[num1].style.background='#c7000b'
			lunbo2.style.transition='500ms'
			left2=-lunbo2img*num1
			lunbo2.style.left=left2+'px'
			num1++
		}		
		
	},1000)
	}
	lunbo2a()
	lunbo2.onmouseover=function(){
		clearInterval(timer2)
	}
	lunbo2.onmouseout=function(){
		lunbo2a()
	}
	//理财分页
	var innermain = document.getElementsByClassName('inner-main')
	var touzimenu = document.getElementsByClassName('touzi-menu')
	var areaone = document.getElementById('areaone')
	for(var i=0;i<touzimenu.length;i++){
		touzimenu[i].c=i
		touzimenu[i].onmouseover=function(){
			innermain[this.c].style.transition='1000ms'
			for(var j=0;j<innermain.length;j++){
				innermain[j].style.display='none'
				touzimenu[j].style.borderBottom='none'
			}
			innermain[this.c].style.display='block'
			this.style.borderBottom='3px #ff6200 solid'
			this.style.cursor='pointer'
		}
	}
	//融e购分页
	var ctrlmenu = document.getElementsByClassName('ctrlmenu')
	var ctrljinrong = document.getElementsByClassName('ctrljinrong')
	for(var i=0;i<ctrlmenu.length;i++){
		ctrlmenu[i].d=i
		ctrlmenu[i].onmouseover=function(){
			for(var j=0;j<ctrljinrong.length;j++){
				ctrljinrong[j].style.display='none'
				ctrlmenu[j].style.borderBottom='none'
			}
			ctrljinrong[this.d].style.display='block'
			this.style.borderBottom='3px #ff6200 solid'
			this.style.cursor='pointer'
		}
	}
	//图片位移
	var adver = document.getElementsByClassName('advertising')
	var move = document.getElementsByClassName('move')
	var hover3 = document.getElementsByClassName('hover3')
	for(var i=0;i<adver.length;i++){
		adver[i].g=i
		adver[i].onmouseover=function(){
			
			move[this.g].style.transition='500ms'
			move[this.g].style.marginLeft='25px'
			this.style.cursor='pointer'
		}
		adver[i].onmouseout=function(){
			move[this.g].style.marginLeft='40px'
		}
		hover3[i].onmouseover=function(){
			this.style.color='#D00F1B'
		}
		hover3[i].onmouseout=function(){
			this.style.color='black'
		}
	}
	//图片变大
	var biandakuang = document.getElementsByClassName('bianda')
	var biandaimg = document.getElementsByClassName('biandaimg')
	var hover2 = document.getElementsByClassName('hover2')
	for(var i=0;i<biandakuang.length;i++){
		biandakuang[i].h=i
		biandakuang[i].onmouseover=function(){
			biandaimg[this.h].style.transition='500ms'
			biandaimg[this.h].style.width='99px'
			hover2[this.h].style.color='#D00F1B'
			this.style.cursor='pointer'
		}
		biandakuang[i].onmouseout=function(){
			biandaimg[this.h].style.width='88px'
			hover2[this.h].style.color='black'
		}
	}
	//底部图片变色
	var bottombox = document.getElementsByClassName('bottom-box')
	var bottomimg = document.getElementsByClassName('bottom-img')
	var bottomp = document.getElementsByClassName('bottom-p')
	for(var i=0;i<bottombox.length;i++){
		bottombox[i].y=i
		bottombox[i].onmouseover=function(){
			if(this.y==0){
				bottomimg[this.y].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/icon1_hover.png'
			}else{
				bottomimg[this.y].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/icon4_hover.png'
			}
			
			bottomp[this.y].style.color='#D00F1B'
			this.style.cursor='pointer'
		}
		bottombox[i].onmouseout=function(){
			if(this.y==0){
				bottomimg[this.y].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/icon1.png'
			}else{
				bottomimg[this.y].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/icon4.png'
			}
			
			bottomp[this.y].style.color='black'
		}
	}
	//金融图片红字
	var jinrongimg = document.getElementsByClassName('jinrong-img')
	var imglinkp = document.getElementsByClassName('imglink-p')
	
	for(var i=0;i<jinrongimg.length;i++){
		jinrongimg[i].j=i
		jinrongimg[i].onmouseover=function(){
			this.style.cursor='pointer'
			imglinkp[this.j].style.color='#D00F1B'
		}
		jinrongimg[i].onmouseout=function(){
			this.style.cursor='pointer'
			imglinkp[this.j].style.color='black'
		}
	}
	//移入动画
	var buyone1 = document.getElementsByClassName('buy-one1')
	var buyonep = document.getElementsByClassName('buy-one-p')
	var buyonebutton = document.getElementsByClassName('buy-one-button')
	
	for(var i=0;i<buyone1.length;i++){
		buyone1[i].k=i
		buyone1[i].onmousemove=function(){
			this.style.transition='500ms'
			this.style.boxShadow=' 1px 1px 5px black'
			buyonep[this.k].style.color='#D00F1B'
			buyonebutton[this.k].style.background='#ff6200'
			buyonebutton[this.k].style.color='white'
		}
		buyone1[i].onmouseout=function(){
			this.style.transition='0ms'
			this.style.boxShadow='  0 0 0 white'
			buyonep[this.k].style.color='black'
			buyonebutton[this.k].style.background='#f2f2f2'
			buyonebutton[this.k].style.color='black'
		}
	}
	//右侧固定定位事件
	var  daohangmenu = document.getElementsByClassName('daohangmenu')
	var daohangmenuimg = document.getElementsByClassName('daohangmenu-img')
	var tanchu = document.getElementsByClassName('tanchu')
	
	for(var i=0;i<daohangmenu.length;i++){
		daohangmenu[i].l=i
		daohangmenu[i].onmousemove=function(){
			
			if(this.l==0){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav1_b_ie8.png'
			}
			if(this.l==1){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2018/sideNav_wechat_b.png'
			}
			if(this.l==2){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav_er_b_ie8.png'
			}
			if(this.l==3){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav_phone_b.png'
			}
			tanchu[this.l].style.display='block'

		}
		daohangmenu[i].onmouseout=function(){
			if(this.l==0){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav1.png'
			}
			if(this.l==1){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2018/sideNav_wechat.png'
			}
			if(this.l==2){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav_er.png'
			}
			if(this.l==3){
				daohangmenuimg[this.l].src='http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/sideNav_phone.png'
			}
			tanchu[this.l].style.display='none'
		}
	}
	//文字轮播
    var timeId;  
    show2.innerHTML = show1.innerHTML;  
    timeId = setInterval(function(){
    	play()
    },40);
    function play(){  
        if (main.scrollTop >= show1.offsetHeight) {
            main.scrollTop=0;  
        }else{  
            main.scrollTop++
        }  
    }  
    play();  
    main.onmouseover = function(){  
        clearInterval(timeId)  
    };  
    main.onmouseout = function(){  
         timeId = setInterval(function(){
    	play()
    	
    },40);
    };  
    //遮罩层
    var change = document.getElementsByClassName('change')
    var chakan = document.getElementsByClassName('chakan')
    var zhezhao = document.getElementsByClassName('zhezhao')
    var chakan1 = document.getElementsByClassName('chakan1')
    for(var i=0;i<change.length;i++){
    	change[i].m=i
    	change[i].onmouseover=function(){
    		chakan1[this.m].style.transition='500ms'
    		chakan[this.m].style.transition='500ms'
    		chakan1[this.m].style.opacity='0.9'
    		chakan[this.m].style.top='40px'
    		chakan[this.m].style.opacity='1'
    	}
    	change[i].onmouseout=function(){
    		chakan1[this.m].style.opacity='0'
    		chakan[this.m].style.top='50px'
    		chakan[this.m].style.opacity='0'
    	}
    }
    //贵金属
    var gjs = document.getElementsByClassName('gjs')
    var gjsp = document.getElementsByClassName('gjs-p')
    var gjsbutton = document.getElementsByClassName('gjs-button')
    for(var i=0;i<gjs.length;i++){
    	gjs[i].n=i
    	gjs[i].onmouseover=function(){
    		gjsp[this.n].style.color='#d00f1b'
    		gjsbutton[this.n].style.background='#ff6200'
    		gjsbutton[this.n].style.color='white'
    		this.style.cursor='pointer'
    	}
    	gjs[i].onmouseout=function(){
    		gjsp[this.n].style.color='black'
    		gjsbutton[this.n].style.background='#f2f2f2'
    		gjsbutton[this.n].style.color='black'
    	}
    }
    
}



