document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');

    // Gallery data embedded directly to avoid CORS issues with file:// protocol
    const galleryData = {
        "posts": [
            {
                "id": 1,
                "date": "2022-03-10",
                "title": "Andromeda Galaxy",
                "target": "M33 (Andromeda Galaxy)",
                "constellation": "Andromeda",
                "description": "Absolutely amazing raw data from @telescope.live that turned out to be this beauty. It's crazy that I pulled this off, curves transformation is legendary. This is peak editing for me right here, let's see if I can ever top this image.",
                "exposure": "Many hours (LRGB)",
                "location": "IC Observatory, Spain",
                "imagePath": "astrophotography_images/andromeda.avif"
            },
            {
                "id": 2,
                "date": "2021-10-25",
                "title": "Bubble Nebula",
                "target": "NGC 7635 (Bubble Nebula)",
                "constellation": "Cassiopeia",
                "description": "My first image after coming to college! After settling down, I contacted an astronomy professor for somewhere to get my hands on telescopes, and he gave me some credits for the Skynet Robotic Telescope Network operated by University of North Carolina, where I had access to the RRRT at Fan Mountain Observatory. I did some testing, and ended up choosing the bubble nebula to be my first target. Although this nebula is probably too small for this telescope to handle, I really wanted to see what kind of results I would get, so here it is! The coloration is a bit off and there's little to no blue which is very unfortunate. Not sure what the problem is, but, I'll get it next time!",
                "exposure": "Luminance - 10 @ 75sec, S-II - 10 @ 75sec, O-III - 15 @ 80sec",
                "location": "Fan Mountain Observatory, Virginia",
                "imagePath": "astrophotography_images/bubble.avif"
            },
            {
                "id": 3,
                "date": "2021-01-03",
                "title": "Soul Nebula",
                "target": "Westerhout 5 (Soul Nebula)",
                "constellation": "Cassiopeia",
                "description": "@telescope.live Happy New Year and bless your souls! The soul nebula sits right beside the heart nebula, you can see the edge of the heart at the left bottom of the image. Together, they are often mentioned as \"heart and soul\", and form a spectacular frame that I will one day capture! The blue in these narrowband images are always so fascinating to look at, especially in nebulas like this one, where the blue is enclosed by a ring of orange, which almost makes it look like a magical portal to a different universe. Although these are merely assigned colors, they still look amazing!",
                "exposure": "H-alpha - 12 @ 450sec, O-III - 12 @ 450sec, S-II - 12 @ 450sec",
                "location": "El Sauce Observatory, Chile",
                "imagePath": "astrophotography_images/soul.avif"
            },
            {
                "id": 4,
                "date": "2020-12-22",
                "title": "Eagle Nebula",
                "target": "M16 (Eagle Nebula)",
                "constellation": "Serpens",
                "description": "@telescope.live My second set of data on the Eagle Nebula! In comparison to the first time, the images this time are so much more detailed and refined. The blue and orange from using the Hubble palette look so much better than the green and yellow from my first attempt. Although this is nowhere near the pillars of creation image, I still really love it!",
                "exposure": "H-alpha - 8 @ 600 sec, O-III - 24 @ 600 sec, S-II - 24 @ 600 sec",
                "location": "El Sauce Observatory, Chile",
                "imagePath": "astrophotography_images/eagle-2.avif"
            },
            {
                "id": 5,
                "date": "2020-10-29",
                "title": "Pleiades",
                "target": "M45 (Pleiades)",
                "constellation": "Taurus",
                "description": "@telescope.live The beautiful seven sisters! The blue in this image is just breathtaking; the faint nebulosity around the stars makes it that much prettier. I was afraid that even three-minute exposures would be too much, but I am very very happy with the final result. As usual, morphological transformation was such a crucial step to bring out the main focus. I say this every time but this is by far my best processing product!",
                "exposure": "L - 5 @ 180 sec, R - 5 @ 180 sec, G - 5 @ 180 sec, B - 5 @ 180 sec",
                "location": "IC Astronomy Observatory, Spain",
                "imagePath": "astrophotography_images/pleiades.avif"
            },
            {
                "id": 6,
                "date": "2020-10-17",
                "title": "Cygnus Loop",
                "target": "Cygnus Loop",
                "constellation": "Cygnus",
                "description": "@telescope.live Here is the gorgeous supernova remnant in Cygnus consisting of the Western and Eastern Veil and Pickering's Triangle in HOO (combined using h-alpha data as red and o-iii data as green and blue). The shape of this remnant is simply fascinating, the fact that it is circular makes total sense because of the explosion. I hope I can image the different parts separately closer up, I would love to have more details in the veils. There's also not enough blue in the image so the red stands out a lot, possibly a bit too much.",
                "exposure": "H-alpha - 7 @ 300 sec, O-III - 5 @ 300 sec",
                "location": "IC Astronomy Observatory, Spain",
                "imagePath": "astrophotography_images/cygnus_loop.avif"
            },
            {
                "id": 7,
                "date": "2020-10-12",
                "title": "Heart Nebula",
                "target": "IC 1805 (Heart Nebula)",
                "constellation": "Cassiopeia",
                "description": "@telescope.live The Heart Nebula has been a target in mind for a very long time, it is a stunningly beautiful nebula. Although I say this for every image, but this is by far my proudest one. I utilized practically all my knowledge in image processing using PixInsight, learned a bunch of new techniques, and produced this final product. The most important steps include LRGB combination, which I used the h-alpha as the luminance layer and a convoluted SHO Hubble palette as the RGB (credit: Entering Into Space on YouTube), and morphological transformation which really dimmed the stars and brought out the nebula. Not only is this my new computer screen wallpaper, I might get a print of this and hang it up in my room!",
                "exposure": "H-alpha - 8 @ 300 sec, O-III - 8 @ 300 sec, S-II - 8 @ 300 sec",
                "location": "IC Astronomy Observatory, Spain",
                "imagePath": "astrophotography_images/heart.avif"
            },
            {
                "id": 8,
                "date": "2020-09-04",
                "title": "North American Nebula",
                "target": "NGC 7000 (North American Nebula)",
                "constellation": "Cygnus",
                "description": "@telescope.live Found this amazing place for getting raw images! This is the result from the free 20 credits given which ended up being 24 minutes of exposure time. I don't know if I can go back to my school's telescope anymore... I am really out of words for how beautiful this image is. This is so far my proudest work processing wise. I learned how to use Curves Transformation to bring out the target and manipulate the hues, range and star masks to target my processing to specific areas, and what I thought was the most important touch that is Morphological Transformation which really dimmed all the stars and made the nebula stand out. The masks allowed me to achieve what I've been struggling with for a long time - unnaturally colorful stars. It was an artistic choice to keep some stars colorful, but I made sure that most of them are basically white. Simply gorgeous! This has become my new lock screen background on my phone.",
                "exposure": "H-alpha - 2 @ 240 sec, O-III - 2 @ 240 sec, S-II - 2 @ 240 sec",
                "location": "IC Astronomy Observatory, Spain",
                "imagePath": "astrophotography_images/north_american.avif"
            },
            {
                "id": 9,
                "date": "2020-07-22",
                "title": "Crescent Nebula",
                "target": "NGC 6888 (The Crescent Nebula)",
                "constellation": "Cygnus",
                "description": "My very first attempt at taking narrowband images! This was taken during the 2020 Summer Science Program by Dr. Cassandra Fallscheer with the Central Washington University observatory. I had to learn about processing narrowband images and monochrome images in general as I have only been using a one-shot color camera. The calibration wasn't perfect which is why there are some gradients in the background. The CCD is apparently faulty, thus the weird blooming around the bright stars.",
                "exposure": "H-alpha - 15 @ 60 sec, O-III - 15 @ 60 sec",
                "location": "Central Washington University Observatory, WA",
                "imagePath": "astrophotography_images/crescent.avif"
            },
            {
                "id": 10,
                "date": "2020-07-22",
                "title": "Eagle Nebula",
                "target": "M16 (The Eagle Nebula)",
                "constellation": "Serpens",
                "description": "Same target as the famous \"Pillars of Creation\" image by the Hubble Space Telescope! The results came out a lot better than I expected considering the exposure time was a total of 18 minutes. For my first Hubble palette image, I'm very satisfied with my processing. I had to play around with the ratio of SHO to get the colors that are usually seen on the internet. The weird blooming is still there, but there's really nothing I can do about that. I almost had the chance to use the FOAH Observatory in New Mexico to image the Veil Nebula, but the weather condition didn't allow it to happen.",
                "exposure": "H-alpha - 3 @ 120 sec, O-III - 3 @ 120 sec, S-II - 3 @ 120 sec",
                "location": "Central Washington University Observatory, WA",
                "imagePath": "astrophotography_images/eagle-1.avif"
            },
            {
                "id": 11,
                "date": "2020-04-18",
                "title": "Whirlpool Galaxy",
                "target": "M51 (The Whirlpool Galaxy)",
                "constellation": "Canes Venatici",
                "description": "This is actually my second attempt at this target, the first one was completely out of focus so I had to trash it. Another 4-hour-long project that took forever to integrate and process! My computer overheats so much that I'm scared it's going to explode. M51 is an interacting grand-design spiral galaxy, it really does look like a whirlpool. My favorite part of this image is the blue and tiny red dots in the galaxy, it always amazes me that I am able to capture these colors from so far away.",
                "exposure": "240 @ 60 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/whirlpool.avif"
            },
            {
                "id": 12,
                "date": "2020-04-16",
                "title": "Messier 3",
                "target": "M3 (star cluster)",
                "constellation": "Canes Venatici",
                "description": "That's a whole lot of stars! Every time I look into this picture, the world that I live in seems so small and irrelevant. Every dot in this picture could be another solar system with potentially life on one of the planets, there are endless possibilities in this picture! I've decided to set this as my lock screen background on my phone as I just don't seem to get bored of it.",
                "exposure": "240 @ 30 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/m3.avif"
            },
            {
                "id": 13,
                "date": "2020-04-01",
                "title": "Owl Nebula",
                "target": "M97 (The Owl Nebula)",
                "constellation": "Ursa Major",
                "description": "Definitely the cutest nebula ever! Apparently the two dark spots in the nebula look like eyes of an owl. This is a planetary nebula, a type of emission nebula consisting of an expanding, glowing shell of ionized gas ejected from red giant stars late in their lives (Wikipedia). Turns out a planetary nebula has nothing to do with a planet. Happy April Fools!",
                "exposure": "120 @ 60 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/owl.avif"
            },
            {
                "id": 14,
                "date": "2020-03-27",
                "title": "Sunflower Galaxy",
                "target": "M63 (The Sunflower Galaxy)",
                "constellation": "Canes Venatici",
                "description": "My longest project so far! A total exposure of 3 hours took forever to integrate, but it was well worth it. I am really happy with the final results, and I was able to learn a lot more about post-processing during the process. I've now established a general workflow in PixInsight and have some understanding on the basic modules used in the software. My favorite has to be Color Saturation because it's the one that brings out all the colorful details of the image. The spiral arms of this galaxy is truly gorgeous, making it my favorite galaxy so far! I still haven't figured out how to keep the stars less colorful as you may have noticed the unnaturally red, big star in the top left section...",
                "exposure": "360 @ 30 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/sunflower.avif"
            },
            {
                "id": 15,
                "date": "2020-03-27",
                "title": "Horsehead Nebula",
                "target": "B33 / IC434 (The Horsehead Nebula)",
                "constellation": null,
                "description": "This image was taken while I was being quarantined in Tianjing, China after the flight from New York. I was able to remote control the observatory at my high school from my hotel room. This was also an adulting gift for myself as I took it on my 18th birthday; the horsehead symbolizing my Chinese zodiac sign as I was born in 2002, a horse year.",
                "exposure": "60 @ 60 sec (27 usable)",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/horsehead.avif"
            },
            {
                "id": 16,
                "date": "2020-03-21",
                "title": "Cigar Galaxy",
                "target": "M82 (The Cigar Galaxy)",
                "constellation": "Ursa Major",
                "description": "This image was taken while I was on spring break in Washington D.C. remotely from my room. I had to stay up until 3am to finish up the imaging. The results turned out pretty nice, but I honestly would like the red details in the center to be more visible. The entire picture has a reddish tint because I cranked up the color saturation. There has to be a way to only change part of the image that I'm not aware of since PixInsight is such an almighty software. The really bright stars have a halo around them and I have no idea how to deal with that...",
                "exposure": "120 @ 60 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/cigar.avif"
            },
            {
                "id": 17,
                "date": "2020-03-05",
                "title": "Orion Nebula",
                "target": "Orion Nebula (M42)",
                "constellation": null,
                "description": "The Orion Nebula is an easy deep sky target that shows up beautifully. This was a very rough take on the nebula without using HDR, thus its core all blown out. I've edited this image a couple times and decided to stick with this version. One day I will image it again with HDR!",
                "exposure": "76 @ 25 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/orion.avif"
            },
            {
                "id": 18,
                "date": "2020-03-01",
                "title": "Leo Triplet",
                "target": "M65, M66 & NGC 3628",
                "constellation": null,
                "description": "My first processed image!",
                "exposure": "60 @ 30 sec",
                "location": "Dixon Observatory, Berkshire School, MA",
                "imagePath": "astrophotography_images/leo_triplet.avif"
            }
        ]
    };

    renderGallery(galleryData.posts);

    function renderGallery(posts) {
        // Clear existing content
        galleryGrid.innerHTML = '';

        // Add section tag
        const sectionTag = document.createElement('span');
        sectionTag.className = 'section-tag';
        sectionTag.textContent = 'Gallery';
        galleryGrid.appendChild(sectionTag);

        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card astro-card';

            // Create image section
            const imageDiv = document.createElement('div');
            imageDiv.className = 'astro-image';

            if (post.imagePath) {
                const img = document.createElement('img');
                img.src = post.imagePath;
                img.alt = post.title;
                img.loading = 'lazy';

                // Fallback to placeholder if image fails to load
                img.onerror = () => {
                    img.style.display = 'none';
                    const placeholder = createPlaceholder(post.title);
                    imageDiv.appendChild(placeholder);
                };

                imageDiv.appendChild(img);
            } else {
                imageDiv.appendChild(createPlaceholder(post.title));
            }

            // Create info section
            const infoDiv = document.createElement('div');
            infoDiv.className = 'astro-info';

            const title = document.createElement('h3');
            title.textContent = post.title;

            const details = document.createElement('p');
            details.className = 'astro-details';

            // Helper to create detail items
            const createDetail = (label, value) => {
                if (!value) return '';
                return `<span class="detail-item"><strong>${label}:</strong> ${value}</span>`;
            };

            details.innerHTML = `
                ${createDetail('Object', post.target)}
                ${createDetail('Date', formatDate(post.date))}
                ${createDetail('Exposure', post.exposure)}
                ${createDetail('Location', post.location)}
            `;

            const description = document.createElement('p');
            description.className = 'astro-description';
            description.textContent = post.description;

            // Assemble info
            infoDiv.appendChild(title);
            infoDiv.appendChild(details);
            infoDiv.appendChild(description);

            // Assemble card
            card.appendChild(imageDiv);
            card.appendChild(infoDiv);

            galleryGrid.appendChild(card);
        });

        // Re-initialize parallax effect for new cards if needed
        // (The existing script.js handles scroll events, but we might need to trigger an initial check)
        if (window.fadeInObserver) {
            document.querySelectorAll('.astro-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                window.fadeInObserver.observe(el);
            });
        }
    }

    function createPlaceholder(title) {
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';

        const icon = document.createElement('span');
        icon.className = 'media-icon';
        icon.textContent = '🌌';

        const label = document.createElement('p');
        label.className = 'media-label';
        label.textContent = title || 'Astrophoto';

        placeholder.appendChild(icon);
        placeholder.appendChild(label);

        return placeholder;
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
});
