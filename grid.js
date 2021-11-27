function updatedata() {
    var grape = document.getElementById("grape");
    grape.width = 1455;
    grape.height = 460;

    var ctx = grape.getContext("2d");

    //Declare variable.
    const cr1 = document.getElementsByClassName("dxc-val-grid");
    const cr2 = cr1[0].getElementsByTagName("circle");
    const centerX = cr2[0].getAttribute('cx');
    const centerY = cr2[0].getAttribute('cy');
    
    const radio=[];
    const circle_color=[];
    const circle_opacity=[];
    for (let i = 0; i < cr2.length; i++) {
        radio.push(cr2[i].getAttribute('r'));
        circle_color.push(cr2[i].getAttribute('stroke'));
        let o1 = cr2[i].getAttribute('opacity');
        let so1 = cr2[i].getAttribute('stroke-opacity');
        let op = (so1 !== null)? so1: o1;
        // console.log(); 
        // console.log(o1);
        // console.log(op);
        // console.log(so1);
        circle_opacity.push(op);
    }
    const maxR = Math.max(...radio);
    // console.log(centerX, centerY);
    // console.log(radio);
    // console.log(maxR);
    // console.log(maxR);
    // console.log(circle_color);
    // console.log(circle_opacity);

    const addcr1 = document.getElementsByClassName("dxc-arg-line");
    if (typeof (addcr1[0]) !== "undefined") {
        // console.log(addcr1[0]);
        const addcr2 = addcr1[0].getElementsByTagName("circle");
        const addcolor = addcr2[0].getAttribute('stroke')
        const addx = addcr2[0].getAttribute('cx')
        const addy = addcr2[0].getAttribute('cy')
        const addr = addcr2[0].getAttribute('r')
        drawCircle(ctx, addx,addy,addr, 1, addcolor);
    } 
    var addtextx = [];
    var addtexty = [];
    var addtext = [];
    const addtextnum1 = document.getElementsByClassName("dxc-val-elements");
    if (typeof (addtextnum1[0]) !== "undefined") {
        // console.log(addcr1[0]);
        const addtextnum2 = addtextnum1[0].getElementsByTagName("text");
        for (let i = 0; i < addtextnum2.length; i++) {
            addtextx[i] = addtextnum2[i].getAttribute('x');
            addtexty[i] = addtextnum2[i].getAttribute('y');
            addtext[i] = addtextnum2[i].innerHTML;  
            lavelText(ctx,addtextx[i],addtexty[i],addtext[i],'#767676');
        }
        
    } 
    const addline1 = document.getElementsByClassName("dxc-val-line");
    if (typeof (addline1[0]) !== "undefined") {
        const addline2 = addline1[0].getElementsByTagName("path");
        const addlcolor = addline2[0].getAttribute('stroke')
        const adddata = addline2[0].getAttribute('d')
        var addcoor = adddata.split(" ");
        drawLineWidth(ctx,addcoor[1], addcoor[2], addcoor[1], parseFloat(addcoor[2])-parseFloat(addcoor[4])+parseFloat(addcoor[1]),1,1,addlcolor);
        // console.log(addcoor, parseFloat(addcoor[2])-parseFloat(addcoor[4])+parseFloat(addcoor[1]));
    }    
    //Write header.
    lavelHeader(ctx,centerX, 27, "Het resultaat van de adviestool",'#232323')

    //Draw circle.
    for (let i = 0; i < radio.length; i++) {
        drawCircle(ctx, centerX,centerY,radio[i], circle_opacity[i], circle_color[i]);
    }

    const ax1 = document.getElementsByClassName("dxc-arg-grid");
    const ax2 = ax1[0].getElementsByTagName("path");
    const axis_color=[];
    const axis_opacity=[];
    for (let i = 0; i < ax2.length; i++) {
        axis_color.push(ax2[i].getAttribute('stroke'));
        let op = (ax2[i].getAttribute('stroke-opacity') =="null")?ax2[i].getAttribute('stroke-opacity'):ax2[i].getAttribute('opacity');
        // console.log(op);
        axis_opacity.push(op);
    }
    // console.log(axis_color);
    // console.log(axis_opacity);

    //Draw axis and write unit.
    for (let i = 0; i < axis_color.length; i++) {
        drawLineWidth(ctx,centerX, centerY, 
                        parseFloat(centerX)+parseFloat(maxR*Math.sin(Math.PI*i/3)), 
                        parseFloat(centerY)-parseFloat(maxR*Math.cos(Math.PI*i/3)),
                        axis_opacity[i],axis_color[i]);
        // console.log(maxR*Math.sin(Math.PI*i/3));
        // console.log(parseFloat(centerX)+parseFloat(maxR*Math.sin(Math.PI*i/3)));
    }

    //Set the title of axis.
    var laveloffset = 20;
    for (let i = 0; i < axis_color.length; i++) {
        drawLineWidth(ctx, parseFloat(centerX)+parseFloat(maxR*Math.sin(Math.PI*i/3)), 
                           parseFloat(centerY)-parseFloat(maxR*Math.cos(Math.PI*i/3)),
                           parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffset))*Math.sin(Math.PI*i/3)), 
                           parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffset))*Math.cos(Math.PI*i/3)),
                           1,"#767676");
        //   console.log(maxR+laveloffset);
        //   console.log(parseFloat(centerX)+parseFloat(maxR*Math.sin(Math.PI*i/3)));
    }
    var laveloffsetX = 55;
    var laveloffsetY = 10;
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*5/3)),
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*5/3))-14, 
                  "Circulair",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*5/3)),
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*5/3)), 
                  "ondernemen",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*4/3)),
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*4/3)), 
                  "Inrichting",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*4/3)),
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*4/3))+14, 
                  "materiall-",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*4/3)),
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*4/3))+28, 
                  "scheiding",'#767676');
    lavelText(ctx,centerX,
                  parseFloat(centerY)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY)))+14, 
                  "Competenties",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*2/3))+3,
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*2/3))+5, 
                  "Data en inzicht",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*1/3))+3,
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*1/3))-14, 
                  "Medewerkers",'#767676');
    lavelText(ctx,parseFloat(centerX)+parseFloat((parseFloat(maxR)+parseFloat(laveloffsetX))*Math.sin(Math.PI*1/3))+3,
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY))*Math.cos(Math.PI*1/3)), 
                  "betrokkeinheid",'#767676');
    lavelText(ctx,centerX,
                  parseFloat(centerY)-parseFloat((parseFloat(maxR)+parseFloat(laveloffsetY)))-5,
                  "Doelen",'#767676');

    //Draw red circle and red line.

    const src1 = document.getElementsByClassName("dxc-series-group");
    const src2 = src1[0].getElementsByClassName("dxc-series");
    for (let i = 0; i < src2.length; i++) {
        const src3 = src2[i].getElementsByClassName("dxc-elements");
        const src = src3[0].getElementsByTagName("path");
        if(typeof src[0] === "undefined") {}
        else{
            const data = src[0].getAttribute('d');
            const colorgrid2 = src[0].style.stroke;
            const colorgrid1= src3[0].getAttribute('stroke');
            var colorgrid = (colorgrid2=="")?colorgrid1:colorgrid2;
            var opfill = src2[i].getElementsByClassName("dxc-trackers");
            var opacity = opfill[0].style.opacity;
            var coor = data.split(" ");
            // console.log(data);
            console.log(coor);
            // console.log(colorgrid);
            // console.log(colorgrid1);
            // console.log(colorgrid2);
            // console.log(opacity);
            for (let j = 0; j < 6; j++) {
                drawLineWidth(ctx,coor[3*j+1], coor[3*j+2],coor[3*j+4], coor[3*j+5],1,2,colorgrid);
                drawfillCircle(ctx, coor[3*j+1], coor[3*j+2], 6, colorgrid);
            }
            drawfillPolygon(ctx,coor[1], coor[2], coor[4], coor[5], coor[7], coor[8], coor[10], coor[11], coor[13], coor[14], coor[16], coor[17],opacity, colorgrid );
        }
        
    }
}


