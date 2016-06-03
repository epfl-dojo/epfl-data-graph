<template>
    <ul>
        <li v-link-active>
            <a v-link="{ path: '/' }">Home</a>
        </li>
        <li v-link-active>
            <a v-link="{ path: '/graphDemo' }">GraphDemo</a>
        </li>
        <li v-link-active>
            <a v-link="{ path: '/graphStudOrigin' }">GraphDemo</a>
        </li>
    </ul>
</template>
