let x=[],y=[],z=[],t=[]

let x1,y1,z1,t1
let x2,y2,z2,t2
let x3,y3,z3,t3

const det_s=(x,y,z)=>{
    let diag1,diag2,det
    diag1=(x[0]*y[1]*z[2])+(y[0]*z[1]*x[2])+(z[0]*x[1]*y[2])
    diag2=(y[0]*x[1]*z[2])+(x[0]*z[1]*y[2])+(z[0]*y[1]*x[2])
    det=diag1-diag2
    return det
}
const det_x=(t,y,z)=>{
    let diag1,diag2,det
    diag1=(t[0]*y[1]*z[2])+(y[0]*z[1]*t[2])+(z[0]*t[1]*y[2])
    diag2=(y[0]*t[1]*z[2])+(t[0]*z[1]*y[2])+(z[0]*y[1]*t[2])
    det=diag1-diag2
    return det
}
const det_y=(x,t,z)=>{
    let diag1,diag2,det
    diag1=(x[0]*t[1]*z[2])+(t[0]*z[1]*x[2])+(z[0]*x[1]*t[2])
    diag2=(t[0]*x[1]*z[2])+(x[0]*z[1]*t[2])+(z[0]*t[1]*x[2])
    det=diag1-diag2
    return det
}
const det_z=(x,y,t)=>{
    let diag1,diag2,det
    diag1=(x[0]*y[1]*t[2])+(y[0]*t[1]*x[2])+(t[0]*x[1]*y[2])
    diag2=(y[0]*x[1]*t[2])+(x[0]*t[1]*y[2])+(t[0]*y[1]*x[2])
    det=diag1-diag2
    return det
}
$('#calcular').click(function(){
    x1=$('#x1').val()
    y1=$('#y1').val()
    z1=$('#z1').val()
    
    x2=$('#x2').val()
    y2=$('#y2').val()
    z2=$('#z2').val()

    x3=$('#x3').val()
    y3=$('#y3').val()
    z3=$('#z3').val()

    t1=$('#t1').val()
    t2=$('#t2').val()
    t3=$('#t3').val()

    x.push(parseFloat(x1),parseFloat(x2),parseFloat(x3))
    y.push(parseFloat(y1),parseFloat(y2),parseFloat(y3))
    z.push(parseFloat(z1),parseFloat(z2),parseFloat(z3))
    t.push(parseFloat(t1),parseFloat(t2),parseFloat(t3))

    $('#x').text(`x= ${(det_x(t,y,z))/(det_s(x,y,z))}`)
    $('#y').text(`y= ${(det_y(x,t,z))/(det_s(x,y,z))}`)
    $('#z').text(`z= ${(det_z(x,y,t))/(det_s(x,y,z))}`)
})