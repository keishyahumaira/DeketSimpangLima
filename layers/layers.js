var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'pump:unit': 'pump:unit', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'branch': 'branch', 'alt_name': 'alt_name', 'leisure': 'leisure', 'wikidata': 'wikidata', 'construction': 'construction', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'rooms': 'rooms', 'wheelchair': 'wheelchair', 'website': 'website', 'phone': 'phone', 'opening_hours': 'opening_hours', 'image': 'image', 'healthcare:speciality': 'healthcare:speciality', 'healthcare': 'healthcare', 'description': 'description', 'addr:housenumber': 'addr:housenumber', 'stars': 'stars', 'official_name': 'official_name', 'religion': 'religion', 'beauty': 'beauty', 'tourism': 'tourism', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'height': 'height', 'office': 'office', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'pump:unit': '', 'brand:wikidata': '', 'brand': '', 'branch': '', 'alt_name': '', 'leisure': '', 'wikidata': '', 'construction': '', 'tower:type': '', 'tower:construction': '', 'man_made': '', 'rooms': '', 'wheelchair': '', 'website': '', 'phone': '', 'opening_hours': '', 'image': '', 'healthcare:speciality': '', 'healthcare': '', 'description': '', 'addr:housenumber': '', 'stars': '', 'official_name': '', 'religion': '', 'beauty': '', 'tourism': '', 'addr:street': '', 'addr:postcode': '', 'shop': '', 'height': '', 'office': '', 'backup_generator': '', 'admin_level': '', 'type': '', 'school:type_idn': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'pump:unit': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'branch': 'no label', 'alt_name': 'no label', 'leisure': 'no label', 'wikidata': 'no label', 'construction': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'rooms': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'image': 'no label', 'healthcare:speciality': 'no label', 'healthcare': 'no label', 'description': 'no label', 'addr:housenumber': 'no label', 'stars': 'no label', 'official_name': 'no label', 'religion': 'no label', 'beauty': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'height': 'no label', 'office': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});