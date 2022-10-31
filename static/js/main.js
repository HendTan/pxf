

$(function(){
    
    window.onresize = window.onload = function(){
        let windowWidth = window.innerWidth;
        if(windowWidth <= 500){
            $("#navLinkContainer #navLinks").hide();
            $("#navMenu").show();
        }
        if(windowWidth <= 650){
            $("#WhatsappBtn").empty();
            const newWhatsappA = document.createElement("a");
            newWhatsappA.id = "WhatsappA";
            newWhatsappA.href = "tel:+60126110108";
            newWhatsappA.style.padding = "1rem 2rem";
            newWhatsappA.style.marginLeft = "0";
            const newWhatsappImg = document.createElement("img");
            newWhatsappImg.src = "./static/img/WhatsappBlack.png";
            newWhatsappA.appendChild(newWhatsappImg);
            document.getElementById("WhatsappBtn").appendChild(newWhatsappA);

            $("#EmailBtn").empty();
            const newEmailA = document.createElement("a");
            newEmailA.id = "MailA";
            newEmailA.href = "mailto:xinzhao0318@gmail.com";
            newEmailA.style.padding = "1rem 2rem";
            newEmailA.style.marginLeft = "0";
            const newEmailImg = document.createElement("img");
            newEmailImg.src = "./static/img/Mail.png";
            newEmailA.appendChild(newEmailImg);
            document.getElementById("EmailBtn").appendChild(newEmailA);

            const homeBtns = document.getElementsByClassName("homeTitleBtn");
            for(let i = 0; i < homeBtns.length; i++){
                homeBtns[i].style.padding = "0";
            }

        }
        if(windowWidth >= 700){
            $("#WhatsappBtn").empty();
            const newWhatsappA = document.createElement("a");
            newWhatsappA.id = "WhatsappA";
            newWhatsappA.href = "tel:+60126110108";
            newWhatsappA.style.padding = ".5rem 1rem";
            newWhatsappA.style.display = "flex";
            newWhatsappA.style.alignItems = "center";
            const newWhatsappImg = document.createElement("img");
            newWhatsappImg.src = "./static/img/Whatsapp.png";
            newWhatsappA.appendChild(newWhatsappImg);
            const newWhatsappSpan = document.createElement("span");
            newWhatsappSpan.textContent = "Whatsapp";
            newWhatsappSpan.style.marginLeft = "10px";
            newWhatsappA.appendChild(newWhatsappSpan);
            document.getElementById("WhatsappBtn").appendChild(newWhatsappA);

            $("#EmailBtn").empty();
            const newEmailA = document.createElement("a");
            newEmailA.id = "MailA";
            newEmailA.href = "mailto:xinzhao0318@gmail.com";
            newEmailA.style.padding = ".5rem 1rem";
            newEmailA.style.display = "flex";
            newEmailA.style.alignItems = "center";
            
            const newEmailImg = document.createElement("img");
            newEmailImg.src = "./static/img/MailBlack.png";
            newEmailA.appendChild(newEmailImg);
            const newEmailSpan = document.createElement("span");
            newEmailSpan.textContent = "Email";
            newEmailSpan.style.marginLeft = "10px";
            newEmailA.appendChild(newEmailSpan);
            document.getElementById("EmailBtn").appendChild(newEmailA);
        }
        if(windowWidth <= 1850){
            $("#WhatsappBtn img").prop("src", "./static/img/WhatsappBlack.png");
            $("#EmailBtn img").prop("src", "./static/img/Mail.png");
        }
        if(windowWidth > 1850){
            $("#navMenu").hide();
            $("#navCollapse").hide();
            $("#navLinkContainer #navLinks").show();
        }
    }

    $("#navMenu").click(function(){
        $("#navCollapse").show();
        $("#navCross").show();
        $("#navContainer").hide();
    })

    $("#navCross").click(function(){
        $("#navContainer").show();
        $("#navCollapse").hide();
    })

    $("#WhatsappBtn").bind({
        "mouseenter" : function(){
            $("#WhatsappBtn img").prop("src", "./static/img/WhatsappBlack.png");
            const aTag = document.getElementById("WhatsappA");
            aTag.style.color = "#001a33";
        },
        "mouseleave" : function(){
            $("#WhatsappBtn img").prop("src", "./static/img/Whatsapp.png");
            const aTag = document.getElementById("WhatsappA");
            aTag.style.color = "#DFF1FF";
        }
    })

    $("#EmailBtn").bind({
        "mouseenter" : function(){
            $("#EmailBtn img").prop("src", "./static/img/Mail.png");
            const aTag = document.getElementById("MailA");
            aTag.style.color = "#DFF1FF";
        },
        "mouseleave" : function(){
            $("#EmailBtn img").prop("src", "./static/img/MailBlack.png");
            const aTag = document.getElementById("MailA");
            aTag.style.color = "#001a33";
        }
    })
})