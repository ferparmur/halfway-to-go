<?php
$map = file_get_contents('./map.svg');
$parser = simplexml_load_string($map);
foreach ($parser->path as $node) {
    $country_code = (string) $node->attributes()->id;
    $country_name = (string) $node->attributes()->title;
    $points = (string) $node->attributes()->d;

$file_content = "---
const {fill,stroke,strokeWidth} = Astro.props;
---

<path
    title=\"$country_name\"
    id=\"$country_code\"
    fill={fill}
    stroke={stroke}
    stroke-width={strokeWidth}
    d=\"$points\"
/>
";

    file_put_contents("./countryPaths/$country_code.astro", $file_content);
}
