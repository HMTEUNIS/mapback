import { useState } from 'react'
export default Map;
function Map({setSelected, setSelectedid, setre, re}) {
    // const [height, setHeight] = useState(600);
    // const [width, setWidth] = useState(1000);
    const [url, setUrl] = useState("https://media.istockphoto.com/vectors/modern-city-map-san-francisco-city-of-the-usa-vector-id918457820?k=20&m=918457820&s=612x612&w=0&h=YLzKVDBpvMvNEhOcWvqEOHlGG4_c3xy4oW21mdKxWhQ=");
    const [alt, setAlt] = useState("Map of San Fransico");

    const handleClick = (e) => {
        e.preventDefault()
        setSelected(e.target.alt)
        setSelectedid(parseInt(e.target.target))
       
       
    };


    return ( 

        <div className="mapdiv">
            <img src={url}   alt={alt} useMap="#workmap"/>
         <map id = "workmap" name="workmap">

         <area target= "1"  alt="Presidio" title="Presidio" href="" coords="125,121,132,110,152,46,159,50,173,54,191,68,201,70,229,63,247,64,247,70,243,78,249,89,252,122,172,142,129,138" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="2" alt="Marina" title="Marina" href="" coords="249,64,290,60,296,67,301,63,316,57,325,86,264,98,245,76,251,88" shape="poly"onClick={(e) => handleClick(e)} />
         <area target="3" alt="Russian Hill" title="Russian Hill" href="" coords="319,58,331,111,365,103,362,85,335,61" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="4" alt="Cow Hollow" title="Cow Hollow" href="" coords="250,89,259,98,324,89,326,104,253,113" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="5" alt="Pacific Heights" title="Pacific Heights" href="" coords="252,115,328,105,330,130,251,143,249,127" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="6" alt="Nob Hill" title="Nob Hill" href="" coords="330,112,333,130,379,125,375,104" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="7" alt="Downtown" title="Downtown" href="" coords="337,131,341,155,373,152,375,160,393,146,390,139,380,136,379,127" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="8" alt="Financial District" title="Financial District" href="" coords="378,104,382,133,391,140,393,145,427,111,414,98" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="9" alt="North Beach" title="North Beach" href="" coords="335,58,370,47,405,65,415,97,368,102,364,84,336,58" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="10" alt="Lincoln Park" title="Lincoln Park" href="" coords="28,167,34,152,50,145,57,135,78,135,86,140,95,140,101,147,98,164,45,166,43,184,30,179" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="11" alt="Sea Cliff" title="Sea Cliff" href="" coords="98,139,111,133,118,132,123,125,128,139,116,142,116,154,102,153" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="12" alt="Lake Street" title="Lake Street" href="" coords="118,142,118,157,188,152,209,152,208,145,194,142" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="13" alt="Pesidio Terrace" title="Pesidio Terrace" href="" coords="196,139,246,125,249,145,210,150,210,143" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="14" alt="Outer Richmond" title="Outer Richmond" href="" coords="45,168,99,165,101,201,39,204,38,184,47,184" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="15" alt="Central Richmond" title="Central Richmond" href="" coords="101,158,166,156,166,200,102,203" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="16" alt="Inner Richmond" title="Inner Richmond" href="" coords="168,155,209,153,210,197,192,199,168,199" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="17" alt="Laurel Heights" title="Laurel Heights" href="" coords="211,152,250,146,252,164,210,167" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="18" alt="Lower Pacific Heights" title="Lower Pacific Heights" href="" coords="250,145,326,135,326,144,320,147,322,152,284,156,274,159,253,161" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="19" alt="Polk Gulch" title="Polk Gulch" href="" coords="328,134,335,134,344,176,362,172,334,199,334,177,327,175,321,147,327,145" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="20" alt="Tenderloin" title="Tenderloin" href="" coords="341,158,372,154,372,163,364,170,343,173" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="21" alt="Yerba Buena" title="Yerba Buena" href="" coords="377,161,400,186,426,159,418,151,430,137,416,124" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="22" alt="South Beach" title="South Beach" href="" coords="418,123,430,137,419,151,427,157,409,177,420,187,428,183,436,189,444,184,456,149,432,108" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="23" alt="Lone Mountain" title="Lone Mountain" href="" coords="211,169,248,165,248,179,250,190,212,197" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="24" alt="Anza Vista" title="Anza Vista" href="" coords="249,166,255,163,274,161,274,175,248,181" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="25" alt="Western Addition" title="Western Addition" href="" coords="275,161,284,156,321,154,326,175,306,179,297,184,295,177,277,179" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="26" alt="Golden Gate Park" title="Golden Gate Park" href="" coords="32,207,193,201,224,197,225,207,268,200,270,205,226,212,226,229,148,231,88,233,30,236" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="27" alt="North Panhandle" title="North Panhandle" href="" coords="224,196,251,192,250,181,274,177,278,181,277,198,226,206" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="28" alt="Fillmore" title="Fillmore" href="" coords="280,181,292,178,294,185,305,185,305,195,280,198" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="29" alt="Hayes Valley" title="Hayes Valley" href="" coords="282,200,308,194,308,181,329,177,333,200,316,217,286,218,282,211" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="30" alt="South of Market" title="South of Market" href="" coords="327,208,376,163,402,186,409,178,422,193,401,212,394,213,382,221,355,218,333,216" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="31" alt="Mission Bay" title="Mission Bay" href="" coords="401,214,427,241,446,241,452,224,464,200,437,190,427,184,421,191,424,194" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="60" alt="Outer Sunset" title="Outer Sunset" href="" coords="33,238,87,236,88,287,37,288" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="61" alt="Central Sunset" title="Central Sunset" href="" coords="88,236,148,234,150,285,89,287" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="62" alt="Inner Sunset" title="Inner Sunset" href="" coords="150,233,151,285,161,283,161,273,158,264,162,258,170,259,171,267,175,273,180,276,180,286,193,283,193,255,202,257,213,245,210,230" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="63" alt="Forest Knolls" title="Forest Knolls" href="" coords="194,256,204,257,214,245,220,255,229,250,231,262,225,266,216,290,206,289,192,283" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="64" alt="Haight-Ashbury" title="Haight-Ashbury" href="" coords="228,214,228,223,239,219,241,227,255,225,256,215,278,210,278,201,269,201,268,207" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="65" alt="Cole Valley" title="Cole Valley" href="" coords="214,233,229,229,230,222,238,221,240,230,245,232,248,244,250,252,242,252,242,257,231,258,231,248,220,254,213,244" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="66" alt="Lower Haight" title="Lower Haight" href="" coords="246,227,257,227,258,216,280,212,285,219,285,226,271,229,264,233,261,242,251,250" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="67" alt="Duboce Triangle" title="Duboce Triangle" href="" coords="286,221,315,219,286,246" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="68" alt="Mission Dolores" title="Mission Dolores" href="" coords="309,226,311,266,331,264,329,217,326,210" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="69" alt="Inner Mission" title="Inner Mission" href="" coords="332,217,378,222,380,261,390,271,392,285,388,304,375,307,333,308" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="70" alt="Potrero Hill" title="Potrero Hill" href="" coords="379,224,388,220,398,214,426,241,427,282,431,289,429,301,389,302,394,288,392,271,380,260" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="71" alt="Dogpatch" title="Dogpatch" href="" coords="427,241,448,243,473,261,481,298,431,301,433,284,429,278" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="72" alt="Outer Parkside" title="Outer Parkside" href="" coords="39,291,89,289,92,363,78,360,67,353,45,353" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="73" alt="Parkside" title="Parkside" href="" coords="91,289,151,286,151,349,127,349,111,352,105,344,92,350" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="74" alt="Inner Parkside" title="Inner Parkside" href="" coords="151,287,162,287,163,300,170,302,170,322,165,326,167,347,152,347" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="75" alt="Golden Gate Heights" title="Golden Gate Heights" href="" coords="163,259,171,262,172,273,179,278,181,287,187,299,182,304,185,310,177,311,176,322,170,323,171,302,163,300" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="76" alt="Forest Hill" title="Forest Hill" href="" coords="188,287,195,287,208,305,193,320,178,324,186,311,178,314,189,302" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="77" alt="Midtown Terrace" title="Midtown Terrace" href="" coords="200,292,209,303,209,309,229,316,251,308,249,299,239,300,238,293,247,284,245,270,226,268,218,291" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="78" alt="Twin Peaks" title="Twin Peaks" href="" coords="250,275,257,263,263,270,267,275,260,296,256,303,258,310,251,310,250,295,243,294" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="79" alt="Corona Heights" title="Corona Heights" href="" coords="252,261,262,253,272,253,286,244,284,226,263,235,264,241,251,251" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="80" alt="Tank Hill" title="Tank Hill" href="" coords="233,260,243,260,245,253,252,262,246,271,228,267" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="81" alt="Dolores Heights" title="Dolores Heights" href="" coords="255,263,263,254,287,250,308,229,311,265,330,265,328,277,266,280,269,269" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="82" alt="Pine Lake Park" title="Pine Lake Park" href="" coords="94,352,105,347,110,351,151,349,153,360,92,362" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="83" alt="West Portal" title="West Portal" href="" coords="152,348,168,347,166,325,193,326,199,328,204,335,185,339,164,358,152,359" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="84" alt="Forest Hill Extension " title="Forest Hill Extension " href="" coords="194,323,207,309,211,312,225,318,205,334,215,333" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="85" alt="Noe Valley" title="Noe Valley" href="" coords="265,283,330,279,331,306,328,318,324,333,289,333,271,319,269,308,257,311" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="86" alt="Bernal Heights" title="Bernal Heights" href="" coords="331,310,374,310,389,306,380,327,376,335,374,347,376,360,353,376,336,374,323,377,293,372,315,358,321,351,328,334" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="87" alt="Bayview" title="Bayview" href="" coords="385,324,391,306,443,304,441,324,437,339,453,351,458,371,463,374,466,379,456,381,454,386,473,400,437,443,423,433,429,425,414,415,396,409,391,392,400,399,410,382,415,387,416,377,425,360,401,342,393,354,379,360,374,343,377,331" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="88" alt="Hunter's Point" title="Hunter's Point" href="" coords="444,304,482,300,567,415,520,442,462,418,474,399,456,386,471,374,460,370,455,350,440,336" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="89" alt="Lake Shore" title="Lake Shore" href="" coords="43,356,67,355,77,362,131,362,130,373,153,373,152,379,115,381,124,388,119,404,118,442,147,443,161,455,161,469,59,468" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="90" alt="Stonestown" title="Stonestown" href="" coords="120,382,152,381,150,421,158,431,163,453,149,443,120,443,123,404,126,390" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="32" alt="Merced Manor" title="Merced Manor" href="" coords="133,363,151,361,152,370,130,371" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="33" alt="Lakeside" title="Lakeside" href="" coords="154,362,162,363,157,428,152,418" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="34" alt="Ingleside Heights " title="Ingleside Heights " href="" coords="159,432,191,433,192,459,182,461,170,468,163,468,165,448" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="35" alt="Merced Heights" title="Merced Heights" href="" coords="160,416,194,416,193,428,161,428" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="36" alt="Oceanview" title="Oceanview" href="" coords="192,432,219,432,232,439,212,461,194,462" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="37" alt="Ingleside Terrace" title="Ingleside Terrace" href="" coords="164,376,175,384,182,394,194,398,194,413,161,414" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="38" alt="Ingleside" title="Ingleside" href="" coords="195,402,225,410,242,410,239,430,231,437,221,428,195,429" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="39" alt="Outer Mission" title="Outer Mission" href="" coords="173,470,181,462,211,463,243,419,248,422,264,437,245,458,219,470" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="40" alt="Mission Terrace" title="Mission Terrace" href="" coords="242,415,252,421,265,436,290,395,305,377,294,373,255,387,244,404" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="41" alt="Crocker Amazon" title="Crocker Amazon" href="" coords="222,471,322,471,297,455,286,452,266,439,246,459,225,468" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="42" alt="Excelsior" title="Excelsior" href="" coords="266,438,306,377,337,377,335,389,321,388,334,427,317,464,298,454,287,452" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="43" alt="Portola" title="Portola" href="" coords="322,389,334,428,354,433,398,420,378,365,351,376,337,376,337,388" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="44" alt="Visitacion Valley" title="Visitacion Valley" href="" coords="335,430,353,435,397,422,402,445,390,458,380,470,324,471,319,464" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="45" alt="Silver Terrace" title="Silver Terrace" href="" coords="378,363,395,354,402,345,422,360,411,379,397,394,389,385" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="46" alt="Glen Park" title="Glen Park" href="" coords="249,353,268,345,277,348,283,340,286,333,322,335,317,350,310,358,292,370,282,374,270,366,251,366" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="47" alt="Sunnyside" title="Sunnyside" href="" coords="225,370,235,367,241,364,249,367,275,372,276,379,253,386,243,400,240,409,228,407,228,383" shape="poly"onClick={(e) => handleClick(e)} />
         <area target="48" alt="Diamond Heights" title="Diamond Heights" href="" coords="233,316,256,313,266,312,270,319,281,330,275,345,263,345,248,331,237,327" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="49" alt="Miraloma" title="Miraloma" href="" coords="229,318,215,332,203,340,223,350,224,367,240,363,248,363,247,349,258,346,249,333" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="50" alt="Balboa Terrace" title="Balboa Terrace" href="" coords="163,367,184,369,184,376,178,385,165,375" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="51" alt="Mount Davidson Manor" title="Mount Davidson Manor" href="" coords="185,375,178,389,185,395,201,402,203,384,193,379" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="52" alt="Westwood Park" title="Westwood Park" href="" coords="204,380,222,375,226,381,225,409,204,402" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="53" alt="Saint Francis Wood" title="Saint Francis Wood" href="" coords="164,361,187,342,203,336,200,342,197,356,190,359,190,367,183,367,166,367" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="54" alt="Monterey Heights" title="Monterey Heights" href="" coords="188,373,192,367,191,359,199,357,208,367,201,380" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="55" alt="Sherwood Forest" title="Sherwood Forest" href="" coords="201,352,221,354,207,342,200,342" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="56" alt="Westwood Highlands" title="Westwood Highlands" href="" coords="205,354,222,355,222,373,208,373,210,364" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="57" alt="Little Hollywood" title="Little Hollywood" href="" coords="389,463,404,448,412,459,415,472,385,472" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="58" alt="Portola Place" title="Portola Place" href="" coords="396,411,415,416,426,425,407,449,402,436" shape="poly" onClick={(e) => handleClick(e)} />
         <area target="59" alt="Candlestick Point" title="Candlestick Point" href="" coords="409,449,420,435,437,447,459,422,488,477,420,474,417,467" shape="poly" onClick={(e) => handleClick(e)} />
         </ map > 

     </ div >

    );
    }