let t0=0,t1=0,t2=0,t3=0,t4=0,queue={};function tickPromise(t,n,e,_,o){return console.assert(!0,"varan-editor","\n:----------------------------------------------------------------:::::::::**++=+*\n----------------------------------::.----------------------------:::::::::**++==+\n:-------------------------------:::****--------------------------:::::::::**+=++%\n------------------------------::*------*+:----------------------:::::::::**++==++\n:----------------------------***--------*:::--------------------::::::::*+==+==*+\n:---------------------------*+:---------:++:---------------::--:::::***++=%=+*+++\n---------------------------:**-----------------------:**+**::-:::******++======++\n:--------------------------:+-------:%%%--------:::***+*++*+*********+*++++=+%+=%\n:::--------*++:-----------:*+-------*%%@@::*:*:*:**%@+*++*+++*********:***+=+==%@\n-:::::*::*++**:-----------:*+--::--:=%%@@@%+**+=@@@%%+*+++++****::::::::**+=++%%%\n.::*+==+::+*++*-----------:*=::**+=*=%==%@@@@@@%%@%%--:::::::::::::::::***+=++%%%\n--:*===+::::***------:-::***+*+*-*+=%@@@@#####@@%=%::*::.-:::::::::::::***+=++::+\n---:===+:::+*::--::::**+:***==:-+=+=%@%%=@###@@@@@%++**-..-*:::::::::::**+++:::::\n----*+**+****=++**++*+===**:%%=+*+*=@@#@@#@##@=%@@%%*-........-:::::::*+=+++::**:\n----:=+*+++***++******.-*:**++:*-::*%@@@@@@@####@%%%%%-..........-*+++*--:+*:::::\n----:==+**=:*:+*-.-:::::::**:::--**:*+=%@####@%%=+%%=%=------:+%@@%=:*++--+***:*+\n-----*==*:::----....--..........******++======+++====%%*----+@#####@%-.---=:-***=\n-----:==+:-..................-::+***:*++++==++++%%===%%=---:@@#=:%##@%-..-+::::++\n------===*................--:::*+****++=====++=%@===%%%%---:#@+:%##@@*--..-::::+*\n------:*-...............---:::********+=======@@%%%%%%%%:---:*@####@:---..---:*+:\n-------...............----:::**==+++++=====%%@@@@@@@@@@+--=######@:-----..----+::\n-----...............-----::::*+%@@%=====%%%%@@@@@@@@@@@=%#####@+-------...------:\n..................-------:::**+%@#@@@%%%@@@@@@@@@@@@@@@@####%:---------..--------\n.................--------:::**=@####@@@@@@%%%%%%@@@@@@@@@@@*:::----:--..--:+++*--\n...............----------::::*=@###@@####%==%%%%%%%@@@@@@%::::::::::-...-:@@%=+++\n..............-----------::::*%###@@@###@%=%%%%%%%%%%@@%*:::::::::-...--:@@@@@@@=\n-............-------------:::*@##@@#####%==%%%%@%%%%%@*::::****::....--:@@@@@@###\n:--.........---------------::=@@@==#####@@%%@@@@%%@%+:::**:**:-....---=##########\n*::-........--------------:=####@*@###########@@%=*::****:::-....---*@###########\n**::-......----------------=###@+=########%***::::***::::.....----*@#@###########\n+**::-.....------------------:*:%####@=*::::::::::::--......----*%@##%@##########\n++***:--...---------------------:*+++:--:::::::---......-----:=%@@@@#%%@#########\n*+=++*::--..------------------------::::::----......------:+%@@@@@@@#@%%@##@#####\n*%%%%%=::---....------------------------........-------:+%@@@@@@@@@@##@%%%%%@@###\n%%%%%%%%+::---.........--------............--------:*=%@@@@@@@@@@@@@@############\n%%%%%%%%%=+::------................-----------:*+=%@@@@@@@@@@@@@@@@@@@@@@#######%\n@@@@%%%%%%%%=+*::-----------------------::*+==%%=@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@=%\n@@@@@%%%%%%%%%%%==+*::::::::::::::**+==%%%%%%%%%%@@@@@@@@#@@@@@@@@@@@@@@@@@@@@%=@\n@@@@@%%%%%%%%%@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@###@@\n    ",t,t.editor),t.editor.queue[`${t.slot}`].tick[n]||(t.editor.queue[`${t.slot}`].tick[n]=0),e=t.editor.queue[`${t.slot}`].tick[n],new Promise(function(s,c){if("xxxx"!==n)if(0===e&&0!==_)t0=performance.now(),t2=performance.now(),console.log("_-_-_-_-_-_-_-_-_-_-_-_ ","type:",n,"state: 0","count:",e,"count:",e,":",t0,"= 0 :ms");else if(1===e)t1=performance.now(),t1-=t0,console.log("_-_-_-_-_-_-_-_-_-_-_-_ ","type:",n,"state: 1","count:",e,"count:",e,":",t1,":ms"),console.assert(!0,`\n\n\n                время => ${t1} ${t2}\n\n\n\n                `);else if(2===e)t2=(t2=performance.now())-t0-t1,console.log("_-_-_-_-_-_-_-_-_-_-_-_","type:",n,"count:",e,"count:",e,t2,":ms"),console.assert(!0,`\n\n\n                время => ${t1} ${t2} ${t0}\n\n\n\n                `);else if(e===_)if(o&&"default"!==o){t4=t3+t1+t2+t0;let _=(t3=performance.now())-t0;t3-=t4,t.tick.data={},t.tick.data[n]={},t.tick.data[n].type=n,t.tick.data[n].count=e,t.tick.data[n].time=t3,t.tick.data[n].preset=o,t.tick.data[n].all=_,t.tick.data.type=n,console.log("",t.tick.data),t.editor.queue[`${t.slot}`].tick[n]++,s(t)}else{t4=t3+t1+t2+t0,t3=performance.now(),0===_&&(t0=t3);let o=t3+t1+t2;t3-=t4,s(console.assert(!1,"_-_-_-_-_-_-_-_-_-_-_-_","type:",n,";count:",e,";time:",t3,";:ms","All Time",o,"ms",styles[3]`
                          _______
                           {___}
                           /   \\
                          |     |
                        ^{0}^|^{0}^
                          |     |
                          |-----|
                          |-----|
        ${t}-------------     ---------------${e}
                        |_________|
            `))}else{t4=t3+t1+t2+t0,t3=performance.now();let _=(t3-=t4)+t1+t2;t.editor.queue[`${t.slot}`].tick[n]++,console.log("_-_-_-_-_-_-_-_-_-_-_-_","type:",n,"count:",e,"time:",t3,":ms","All Time",_,"ms")}else console.assert(!1,"tickPromise неизвестный тип",t,n,_)})}queue.staticProperty={};export default tickPromise;