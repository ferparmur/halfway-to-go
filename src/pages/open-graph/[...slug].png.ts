// src/pages/og.png.ts
import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import {type CollectionEntry, getCollection} from "astro:content";
import { getImage } from "astro:assets";

export async function getStaticPaths() {
    const posts = await getCollection('blog');
    return posts.map((post) => ({
        params: { slug: post.slug },
        props: post,
    }));
}

export const GET: APIRoute = async (props) => {
    const fontFile = await fetch(
        "https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2K_c.ttf",
    );
    const fontData: ArrayBuffer = await fontFile.arrayBuffer();
    const backgroundImage = await getImage({src: props.props.data.heroImage, width: 1200, format: 'webp'});

    console.log(props);

    return await satoriAstroOG({
        template: html`
            <div style="display: flex; justify-content: center; align-items:center; font-family: 'DM Serif Display'; height: 100%; color: #fff; background: orange">
                <img src="${props.url.origin}${backgroundImage.src}" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover">
                <div style="display: flex; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"></div>
                <p style="position: absolute; left: 20px; top: 5px; font-size: 38px; line-height: 1">halfway</p>
                <p style="position: absolute; left: 20px; top: 40px; font-size: 38px; line-height: 1">to go</p>
                <h1 style="font-size: 70px; width: 935px; text-align: center; line-height: 1.05">${props.props.data.title}</h1>
            </div>
        `,
        width: 1200,
        height: 630,
    }).toResponse({
        satori: {
            fonts: [
                {
                    name: "DM Serif Display",
                    data: fontData,
                    style: "normal",
                },
            ],
        },
    });
};
