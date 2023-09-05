const EventEmitter=require("events");
const event = new EventEmitter();



event.on("Say my name",()=>{
    console.log("Your name is Bishal")
});


event.on("Say my name",()=>{
    console.log('ooo, so its your name')
});

event.on("collegeName",()=>{
    console.log("Whats your college name?")
});

event.on("collegeName",(clg,sem,yer)=>{
    console.log(`my college name is ${clg} & ${sem} & admission year ${yer}`)
});

event.emit("Say my name")
event.emit("collegeName", "MBB university", "1st semester", 2021)