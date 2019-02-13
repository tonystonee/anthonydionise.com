<template>
<div class="pa-5 white--text projects">
    <h1 class="mb-3">Personal Projects</h1>
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 class="pa-2">
            <v-tooltip bottom>
                <a class="projectLink" slot="activator" target="__blank" href="https://dayonebros.com">
                    <v-card  hover>
                        <img src="img/dayonebros.png" alt="">
                    </v-card>
                    <p class="text-xs-center subheading py-1 pb-0 mb-0">DayOneBros.com</p>
                </a>
                <span>A web app that brings you the top ten videos of the day, overall and in multiple diffrent categories.</span>
            </v-tooltip>
        </v-flex>
    </v-layout>
</div>
</template>

<style lang="stylus">
    .projects{
        img{
            max-width: 100%;
        }
    }
</style>
