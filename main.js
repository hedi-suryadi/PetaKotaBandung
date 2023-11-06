//  Peta BaseMap
var mbAttrOPNVKarte = 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mbUrlOPNVKarte = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png';
var mbAttrOpenTopoMap = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	mbUrlOpenTopoMap = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
var mbAttrEsri_WorldTopoMap =  'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
mbUrlEsri_WorldTopoMap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';

var mbAttrThunderforestOpenCycleMap = '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   mbUrlThunderforestOpenCycleMap = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b';
var mbAttrEsri_WorldImagery = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
   mburlEsri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

//Settingan Ukuran Peta Basemap
var OPNVKarte = L.tileLayer(mbUrlOPNVKarte, {maxZoom: 18, attribution: mbAttrOPNVKarte})
var OpenTopoMap = L.tileLayer(mbUrlOpenTopoMap, {maxZoom: 17, attribution: mbAttrOpenTopoMap})
var Esri_WorldTopoMap = L.tileLayer( mbUrlEsri_WorldTopoMap,{maxZoom: 18, attribution: mbAttrEsri_WorldTopoMap}),
ThunderforestOpenCycleMap = L.tileLayer(mbUrlThunderforestOpenCycleMap, {maxZoom: 22, attribution: mbAttrThunderforestOpenCycleMap}),
 Esri_WorldImagery = L.tileLayer(mburlEsri_WorldImagery, {maxZoom: 17, attribution: mbAttrEsri_WorldImagery}); 

//  <!-- Area Halaman Web Auto Panning adalah kotamadya Bandung -->
var southWest = L.latLng(-6.971, 107.541),
    northEast = L.latLng(-6.836, 107.743),
    bounds = L.latLngBounds(southWest, northEast);



//   <!-- Titik tengah Halaman Web adalah STMIK AMIK BANDUNG -->
var map = L.map('map', {
 maxBounds: bounds,
 center: [-6.914441, 107.638233],
 zoom: 15,
 maxZoom: 22,
 minZoom: 10,
 layers: [Esri_WorldTopoMap]
 });

 // <!-- Utara Peta / Utara Geografis -->
var comp = new L.Control.Compass ({autoActive: false, showDigit:false});  
map.addControl(comp);
// scale bar botton left
var options=null;
var scale = L.control.betterscale({metric: true, imperial: false}).addTo(map);


 //  <!-- Minimap -->
 var ThunderForestOpenCycleMap2 = new L.TileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b',{
   minZoom: 0, 
   maxZoom: 13, 
   attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}
); 
var MiniMap = new L.Control.MiniMap(ThunderForestOpenCycleMap2, 
{ 
   toggleDisplay: true,
   minimized: false
}).addTo(map);


 // Mouse di klik Keluar koordinat
var popup = L.popup(); 
function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("Lokasi Klik -> " + e.latlng.toString())
.openOn(map);
}
map.on('click', onMapClick);

// Measure Plugin Button 
var ctlMeasure = L.control.polylineMeasure({
	position: "topleft",
	measureConrolTitle: "Ukur Panjang",
	showClearControl: true,
	showUnitControl: true
}).addTo(map);





// <=========Batas 1 =================================================================================================================================================>

// <!-- Lokasi STMIK AMIK BANDUNG dengan marker-->
// Marker Data Section
var custommarker = L.layerGroup();
var Icon1 = L.icon({
   iconUrl:'kiara.png',
   iconSize: [30, 30],
   iconAnchor: [15, 30],
   popupAnchor: [0, -30]
   });
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
    popupstmik.setLatLng([-6.916063064718672, 107.64226796391036]);
    popupstmik.setContent('<p><img src="kiara.jpg" width="100" height="100" style="vertical-align:middle"/> <b>Kiara Artha Park</b> Disini!</p>');
var marker = L.marker([-6.916063064718672, 107.64226796391036], {icon:Icon1}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon2 = L.icon({
      iconUrl: 'location.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var   popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.903049576233533, 107.57860941902656]);
      popupstmik.setContent('<p><img src="bandara.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Bandara Husein</b> Disini!</p>');
var marker = L.marker([-6.903049576233533, 107.57860941902656], {icon:Icon2}).addTo(custommarker).bindPopup(popupstmik).closePopup();

var Icon3 = L.icon({
	   iconUrl: 'loc.svg',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
	   popupstmik.setLatLng([-6.900277368414479, 107.59231486766134]);
	   popupstmik.setContent('<p><img src="pemakaman.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Pemakaman Pandu Memorial</b> Disini!</p>');
var marker = L.marker([-6.900277368414479, 107.59231486766134], {icon:Icon3}).addTo(custommarker).bindPopup(popupstmik).closePopup();
   
var Icon4 = L.icon({
      iconUrl: 'loc2.svg',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
  
var popupstmik = new L.Popup({maxWidth : 155, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.929577075918246,107.58637883577484]);
      popupstmik.setContent('<p><img src="flc.jpg" width="155" height="155" style="vertical-align:middle"/> <b>FLC</b> Disini!</p>');
var marker = L.marker([-6.929577075918246,107.58637883577484], {icon:Icon4}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon5 = L.icon({
      iconUrl: 'masjid.png',
      iconSize: [30,30],
      iconAnchor: [15,30],
      popupAnchor: [0,-30]});
var popupmasjid = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popupmasjid.setLatLng([-6.949150177658633, 107.70364821647733]);
      popupmasjid.setContent('<p><img src="masjid.jpeg" width="135" height="135" style="vertical-align:middle"/> <b>MASJID RAYA AL JABBAR</b> Disini!</p>');
var marker = L.marker([-6.949150177658633, 107.70364821647733], {icon:Icon5}).addTo(custommarker).bindPopup(popupmasjid).closePopup();
var Icon6 = L.icon({
	   iconUrl: 'gedung.png',
   	iconSize: [30, 30],
	   iconAnchor: [15, 30],
   	popupAnchor: [0, -30]});
	
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.921099367018087, 107.60902527618208]);
      popupstmik.setContent('<p><img src="Gedung.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Gedung Merdeka</b> Disini!</p>');
var marker = L.marker([-6.921099367018087, 107.60902527618208], {icon:Icon6}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon7 = L.icon({
      iconUrl: 'kebunbinatang.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popupstmik.setLatLng([-6.891042357188519, 107.60700555780788]);
      popupstmik.setContent('<p><img src="zoo.jpg" width="135" height="135" style="vertical-align:middle"/> <b>KEBUN BINATANG BANDUNG</b> <br/> Disini!</p>');
var marker = L.marker([-6.891042357188519, 107.60700555780788], {icon:Icon7}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon8 = L.icon({
	   iconUrl: 'marker_map_icon.svg',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});	
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popupstmik.setLatLng([-6.902183913978579, 107.61870179652274]);
		popupstmik.setContent('<p><img src="gd_sate.jpg" width="130" height="150" style="vertical-align:middle"/></p><p><b>Gedung Sate</b> Disini! </p>');
var marker = L.marker([-6.902183913978579, 107.61870179652274], {icon:Icon8}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon9 = L.icon({
	   iconUrl: 'location.svg',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	   popupstmik.setLatLng([-6.957403704343475, 107.71200762589598]);
	   popupstmik.setContent('<p><img src="stadion-gbla.jpg" width="135" height="135" style="vertical-align:middle"/> <b>Stadion GBLA</b> Disini!</p>');
var marker = L.marker([-6.957403704343475, 107.71200762589598], {icon:Icon9}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon10 = L.icon({
      iconUrl: 'icon.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
      popupstmik.setLatLng([-6.911170151521887, 107.6133204842697]);
      popupstmik.setContent('<p><img src="tll.jpg" width="135" height="175" style="vertical-align:middle"/> <b>Taman Lalu Lintas</b> Disini!</p>');
var marker = L.marker([-6.911170151521887, 107.6133204842697], {icon:Icon10}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon11 = L.icon({
	   iconUrl: 'spjb.svg',
	   iconSize: [30, 30],
	   iconAnchor: [15, 30],
	   popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
		popupstmik.setLatLng([-6.911166720823262, 107.67489808006623]);
		popupstmik.setContent('<p><img src="spjb.png" width="135" height="135" style="vertical-align:middle"/> <b>Sport Jabar</b> Disini!</p>');
var marker = L.marker([-6.911166720823262, 107.67489808006623], {icon:Icon11}).addTo(custommarker).bindPopup(popupstmik).closePopup();
var Icon12 = L.icon({
      iconUrl: 'hospital.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: false});
      popupstmik.setLatLng([ -6.9401261402260985, 107.64670786986431]);
      popupstmik.setContent('<p><img src="pindad.png" width="150" height="150" style="vertical-align:middle"/> <b>RSU Pindad</b>Disini</p>');
var marker = L.marker([-6.9401261402260985, 107.64670786986431], {icon:Icon12}).addTo(custommarker).bindPopup(popupstmik).closePopup();


// <================Batas CastomMarker=========================================================================================================================================================>
// Circle Data Section 
var circle = L.layerGroup();
var circle1 = L.circle(
   [-6.948301331938322, 107.70391196706562], 
{
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 130
}).addTo(circle).bindPopup("<b>Masjid Al Jabbar</b><br/>Disini!").closePopup();
var circle2 = L.circle(
   [-6.900361431379833, 107.59228210222149], 
{
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 130
}).addTo(circle).bindPopup("<b>Pemakaman pandu Memorial</b><br/>Disini!").closePopup();
var circle3 = L.circle(
   [-6.921097831966988, 107.60916786768817], 
{
   color: '#800000',
   fillcolor: '00FFFF',
   fillOpacity: 0.3,
   weight : 2,
   stroke : true,
   radius : 80
}).addTo(circle).bindPopup("<b>Gedung Merdeka</b><br/>Disini!").closePopup();
var circle4 = L.circle(
   [-6.9296050392113075, 107.58643761630785], 
{
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 115
}).addTo(circle).bindPopup("<b>FCL</b><br/>Disini!").closePopup();


// <=================Batas Data Circle (Lingkaran)================================================================================================================================================================================>
 // Rectangle Data Section
 var rectangle = L.layerGroup();
 var rectangle1 =[
   [-6.901285541831683, 107.61665977538428], 
   [-6.903729963393388, 107.62121953070994]];
   L.rectangle(rectangle1,{
   color: '#FD1C03', 
   fillColor: '#F433FF', 
   fillopacity: 0.3, 
   weight: 2, 
 }).addTo(rectangle).bindPopup("<b>Gedung Sate</b><br/>Disini!").closePopup();
 var rectangle2 =[
   [-6.888155991565171, 107.60501910706023], 
   [-6.89393213027725, 107.6089283933344]];
	L.rectangle(rectangle2, {
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(rectangle).bindPopup("<b>KEBUN BINATANG BANDUNG</b><br />Disini!").closePopup();
var rectangle3 =[
   [-6.956072096839321, 107.71088403437096], 
   [-6.9590966485497034, 107.71319073412394]];
	L.rectangle(rectangle3, {
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(rectangle).bindPopup("<b>Stadion Gelora Bandung Lautan Api</b><br />Disini!").closePopup();
var rectangle4 =[
   [-6.888668802543378,107.56462043688828], 
   [-6.909253050544137,107.58778225083626]];
	L.rectangle(rectangle4, {
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(rectangle).bindPopup("<b>IBCC</b><br />Disini!").closePopup();


// <==================Batas Data Rectangle (kotak)===============================================================================================================================================================================================================>
// Polygon Data Section
var polygon = L.layerGroup();
var polygon1 = L.polygon([
   [-6.914197212464714,107.6403666908251],
   [-6.91798593994283,107.6408418859449],
   [-6.91809591944201,107.6409796927176],
   [-6.917811582538633,107.64147958044435],
   [-6.917739157073598,107.64188759691314],
   [-6.917363617447478,107.64184436338007],
   [-6.91731533375954,107.6423118259575],
   [-6.91720803665801,107.6427468633855],
   [-6.91767209644808,107.6428333304516],
   [-6.917824994661089,107.64299545620185],
   [-6.917811582538633,107.64333321818009],
   [-6.917682826149246,107.64336834542536],
   [-6.917621130366115,107.64352776907958],
   [-6.917620076473966,107.64392531267913],
   [-6.914836969312788,107.64367126600496],
   [-6.914690951460699,107.64369155396497],
   [-6.914353599697861,107.64368140998573],
   [-6.913955826414565,107.64361547411198],
   [-6.913885334911583,107.64354446624947],
   [-6.914021445486455,107.64216692466806],
   [-6.914197212464714,107.64036669082515]], 
{
	color: "#306754", 
	fillColor: '#FF5F1F',
	fillOpacity: 0.3,
	weight: 2
}).addTo(polygon).bindPopup("<b>Kiara</b>").closePopup();
var polygon2 = L.polygon ([  
   [-6.909785212834052,107.61242484522745],
   [-6.910573379552801,107.61401271296404],
   [-6.912064502182943,107.61454915476776],
   [-6.912767458362808,107.61290764285064],
   [-6.909859769201745,107.61214589549002],
   [-6.909731958278428,107.61240338755624]],
{
   color: '#FD1C03', 
   fillColor: '#F433FF',
   fillOpacity: 0.2,
   weight: 2
}).addTo(polygon).bindPopup("<b>Taman Lalu Lintas</b><br />Disini!").closePopup();
var polygon3 = L.polygon ([
   [-6.939755750807336, 107.64648460396808], 
   [-6.939907254642364, 107.64707067247525],
   [-6.940022397523677, 107.64721718960163], 
   [-6.940119359928616, 107.64721718960163],
   [-6.940234502758003, 107.6473759164881], 
   [-6.9404466078977265, 107.64733928720756],
   [-6.94053144992607,  107.64748580433383],
   [-6.940622352083139, 107.64747969945273],
   [-6.9406162919400884,  107.64741254577069],
   [-6.940810216484323, 107.64728434328367],
   [-6.940513269493124, 107.64588022082154],
   [-6.940070878729131, 107.64600842330651],
   [-6.940161780974208, 107.64623430387712],
   [-6.939979976465523, 107.64629535268011],
   [-6.940022397523677, 107.64642966004618],
   [-6.9397375703444055,107.64648460396808]],
{
   color: '#FD1C03', 
   fillColor: '#F433FF',
   fillOpacity: 0.3,
   weight: 2
}).addTo(polygon).bindPopup("<b>RS Pindad</b><br />Disini!").closePopup();
var polygon4 = L.polygon([
	[-6.909093896364169, 107.67097570898238],
	[-6.909029990803759, 107.67283179761995],
	[-6.910382656661028, 107.6772735357498],
	[-6.910915201212205, 107.67792799474938],
	[-6.914387376976748, 107.6771662473887],
	[-6.913194485112072, 107.672338271162],
	[-6.912917563355819, 107.67154433729377],
	[-6.912385021060757, 107.67092206480186],
	[-6.912001590236173, 107.67080404760605],
	[-6.909562536878568, 107.67082550527721],
	[-6.909402773119211, 107.6710186243265]], 
{
	color: '#FD1C03', 
	fillColor: '#F433FF',
	fillOpacity: 0.2,
	weight: 2
}).addTo(polygon).bindPopup("<b>Sports Jabar</b><br />Disini!").closePopup();

// <==================Batas Data Polygon=============================================================================================================================================>
// Polyline Data Section	
var polyline = L.layerGroup();
var polyline1 = L.polyline([
   
   [-6.908785708349114,107.64327498413047],
   [-6.908850925050658,107.6432618453876],
   [-6.909268311724745,107.64325527601619],
   [-6.908633469726539,107.64342819046044],
   [-6.903030659034343,107.65399751195076],
   [-6.902555653367813,107.65466737539941],
   [-6.902067075614795,107.65505698985544],
   [-6.902277574082831,107.66026788833068],
   [-6.902477557862099,107.66059243662909],
   [-6.9033450719776255,107.66127316978401],
   [-6.903551947542027,107.66152542693413],
   [-6.904195731935076,107.6674074326474],
   [-6.904243132351823,107.67123893927732],
   [-6.904446463786968,107.67184070919558],
   [-6.90489365278404,107.67280731249696],
   [-6.904934023991743,107.67307320660865],
   [-6.9049247075600135,107.67319207691827],
   [-6.9089007247202545,107.67276849070532],
   [-6.90901887568063,107.6728312597424],
   [-6.910451431450085,107.67743846634642],
   [-6.910977132953732,107.67776191736544],
   [-6.9117891322677565,107.67793464141681],
   [-6.912956874494668,107.67759313721353]],
{
   color: "#800080",
   weight: 5
}).addTo(polyline).bindPopup("<b> Jln. Kab. Pasaman</b><br />Kabupaten Pasaman").closePopup();
var polyline2 = L.polyline ([
   [-6.9097603174415525,107.61216001807793],
   [-6.910469263104773,107.6139128900889],
   [-6.912136892461689,107.61452152620245],
   [-6.912724992231944,107.61306891467547]],
{
    color: '#808000',
    weight: 5
}).addTo(polyline).bindPopup("<b> Area Taman Lalu Lintas</b><br />Disini!").closePopup();

var polyline3 = L.polyline ([
   [-6.9104284001725205,107.61377002672094],
   [-6.908856469142123,107.61830919650282],
   [-6.908808000306948,107.61874954049904],
   [-6.90934940902055,107.62101623050313],
   [-6.9092732734580835,107.62130595779695],
   [-6.910293596057954,107.6257763452814],
   [-6.910307713679785,107.6259209931705],
   [-6.910106290971569,107.62610585448539],
   [-6.909534241872592,107.62669699538537],
   [-6.909608524214548,107.6274358999811],
   [-6.908104304524144,107.62927848485697],
   [-6.907838577504094,107.62921046934912],
   [-6.907602435489011,107.62928447293541],
   [-6.907266588865255,107.62969677862856],
   [-6.906947706417256,107.63016940537545],
   [-6.9133144333015935,107.63430327397043],
   [-6.9140927940180035,107.63468022683668],
   [-6.9145717845906205,107.6356301480572],
   [-6.914661595268726,107.6360372571512],
   [-6.913062237650649,107.64956733425146],
   [-6.912469938559781,107.65406922640466],
   [-6.912609813184659,107.65692086646266],
   [-6.912597004946036,107.6569008453871],
   [-6.913304582530401,107.65861420891821],
   [-6.913658370924537,107.65983412375084],
   [-6.914432083854834,107.66350639370552],
   [-6.915253921521611,107.66732192679694],
   [-6.915835635834995,107.6678148919674],
   [-6.916020306894708,107.66805672393787],
   [-6.916666655038284,107.66991696986742],
   [-6.916870357490808,107.67001860504382],
   [-6.916934992841874,107.67004464873253],
   [-6.916993164650279,107.67063063175732],
   [-6.91853794203476,107.67380491294426],
   [-6.918856388796797,107.67418478716388],
   [-6.91701428359444,107.67629292138486],
   [-6.913014748521874,107.67759312611878],
   [-6.912710905152707,107.67665495999358]],
{
    color: '#808000',
    weight: 5
}).addTo(polyline).bindPopup("<b> Area Taman Lalu Lintas</b><br />Disini!").closePopup();
var polyline3 = L.polyline ([
   [-6.9399970607111925,107.64648244430168],
   [-6.939868502061472,107.64563879542288],
    [-6.940537006656925,107.64581270549894],
    [-6.939956400818673,107.64217265311953],
    [-6.934566486599451,107.64255214518721],
    [-6.931759882153486,107.64307093941261],
    [-6.930899851264115,107.64378475216171],
    [-6.929224058800713,107.64402116077588],
    [-6.928539338295096,107.64428105926879],
    [-6.927520028010093,107.64436475456796],
    [-6.926739939515713,107.64452383707243],
    [-6.913726185923224,107.64372686156048]],
{
    color: '#808000',
    weight: 5
}).addTo(polyline).bindPopup("<b> Area Taman Lalu Lintas</b><br />Disini!").closePopup();

// <=============Batas 2=============================================================================================================================================>

  

  //  <!-- Zoom Level PLugin -->>
  new L.Control.ZoomPanel({
   labels : [
      {
         zoom: 2,
         label: "X2"
      },
      {
         zoom: 6,
         label: "X6"
      },
      {
         zoom: 10,
         label: "X10"
      },
      {
         zoom: 12,
         label: "X12"
      },
      {
         zoom: 16,
         label: "X16"
      },
      {
         zoom: 18,
         label: "X18"
      }
   ]
}).addTo(map);



 //Layer yang akan di-load ke Peta WEBGIS
 var baseLayers = {
   "Esri World Topo Map " : Esri_WorldTopoMap,
   "Open Karte" : OPNVKarte,
   "Open Topo Map" : OpenTopoMap,
   "Thunderforest OpenCycleMap" : ThunderforestOpenCycleMap,
   "Esri World Imagery" : Esri_WorldImagery 
   };
   
   var overlay = {
      "marker" : custommarker,
      "circle" : circle,
      "rectangle" : rectangle,
      "polygon"   : polygon,
      "polyline"  : polyline
   }
   // <!-- Layer Control Peta WEBGIS -->
   L.control.layers(baseLayers, overlay,{
    position: 'topleft',
    collapsed: false 
   }).addTo(map);
  
   
  
