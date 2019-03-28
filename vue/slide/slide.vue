<template>
    <div class="content" ref="content">
        <ul class="content-wrapper"
            ref="imgWrap"
            :style="imgWrapStyle">
            <li :class="['content-img']"
                v-for="(item, index) in imgList"
                :style="{width: `${contentWidth}px`}"
                :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [1, 2, 3, 4, 5],
                currentImg: 1,
                contentWidth: 0
            };
        },
        filters: {
            indexedClass(index) {
                return `content-img-${index}`;
            }
        },
        computed: {
            imgWrapStyle() {
                const {
                    contentWidth,
                    imgList,
                    currentImg
                } = this;

                return {
                    width: `${contentWidth * imgList.length}px`,
                    left: `-${contentWidth * imgList.indexOf(currentImg)}px`
                };
            }
        },
        mounted() {
            this.$nextTick(() => {
                const contentDOM = this.$refs.content;
                this.contentWidth = getComputedStyle(contentDOM, null).width.replace(/px/, '');
            });

            this.autoUpdateImg(2000);
        },
        methods: {
            updateImg(newImg) {
                if (this.currentImg === newImg) {
                    return;
                }

                this.currentImg = newImg;
            },

            autoUpdateImg(time) {
                setInterval(() => {
                    const {
                        imgList,
                        currentImg,
                        updateImg
                    } = this;

                    let index = imgList.indexOf(currentImg);
                    const nextIndex = index === imgList.length - 1
                        ? 0
                        : index + 1;

                    updateImg(imgList[nextIndex]);
                }, time);
            }
        }
    }
</script>

<style lang="scss">
    .content {
        position: relative;
        height: 300px;
        width: 100%;
        overflow: hidden;

        &-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            font-size: 0;
        }


        &-img {
            height: 100%;
            display: inline-block;
            vertical-align: center;
            font-size: 14px;
            text-align: center;
        }
    }
</style>