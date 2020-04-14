$("document").ready(function () {

    $("#pano").html(setFlash('fasad'));
    
    $("#ulPlan a").click(function() {
        var varScript;
        switch (this.id) {
            case '1':
                varScript = 
                '<img src="../images/plan1.png" usemap="#navigation1" />'
                    + '<map name="navigation1">'
                        + '<area id="billiard" alt="Бильярдная" shape="circle" coords="73,331,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="lounge"   alt="Гостиная" shape="circle" coords="469,424,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="hall"     alt="Холл"     shape="circle" coords="623,558,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="kitchen"  alt="Кухня"    shape="circle" coords="768,353,15" href="" onclick="return getFlash(this)" />'
                    + '</map>';
                break;
            case '2':
                varScript = 
                '<img src="../images/plan2.png" usemap="#navigation2" />'
                    + '<map name="navigation2">'
                        + '<area id="bedroom"  alt="Спальня" shape="circle" coords="207,295,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="bath"     alt="Ванная"  shape="circle" coords="365,404,15" href="" onclick="return getFlash(this)" />'
                    + '</map>';
                break;
            case '3':
                varScript = 
                '<img src="../images/plan3.png" usemap="#navigation3" />'
                    + '<map name="navigation3">'
                        + '<area id="theatre"  alt="Кинозал" shape="circle" coords="62,320,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="bathroom" alt="Сауна"  shape="circle" coords="711,408,15" href="" onclick="return getFlash(this)" />'
                    + '</map>';
                break;
            default:
                varScript = 
                '<img src="./images/plan1.png" usemap="#navigation1" />'
                    + '<map name="navigation1">'
                        + '<area id="billiard" alt="Бильярдная" shape="circle" coords="73,331,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="lounge"   alt="Гостиная" shape="circle" coords="469,424,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="hall"     alt="Холл"     shape="circle" coords="623,558,15" href="" onclick="return getFlash(this)" />'
                        + '<area id="kitchen"  alt="Кухня"    shape="circle" coords="768,353,15" href="" onclick="return getFlash(this)" />'
                    + '</map>';
                break;
        }
        
        $('#planImage').html(varScript);

        return false;
    });
    
});

function getFlash(ob)
{
    $("#pano").html(setFlash(ob.id));
    return false;
}

function setFlash(base)
{
    var varScript;
    
    varScript = 
        '<script type="text/javascript">'
            + 'var so = new SWFObject("PWViewer.swf","pano","980","588","9.0.28","#FFFFFF");'
            + 'so.addVariable("base", "'+ base +'/");'
            + 'so.addVariable("lwImg", "resources/waiting.gif");'
            + 'so.addVariable("lwBgColor","204,255,255,255");'
            + 'so.addVariable("iniFile", "config.bin");'
            + 'so.addVariable("progressType", "1");' 
            + 'so.addVariable("swfFile", "");'
            + 'so.addParam("allowNetworking", "all");'
            + 'so.addParam("allowScriptAccess", "always");'
            + 'so.addParam("allowFullScreen", "true");'
            + 'so.addParam("scale", "noscale");' 
            + 'so.write("pano");' 
        + '</script>'
        
    return varScript;
}