---
layout: default
title: blog
permalink: /blog/
---

<!-- <h1 class="page-heading">Blog</h1> -->

<ul class="post-list">
    
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }} </a>
        </h2>
        {{ post.content | strip_html | truncatewords:49}}<br>
            <a href="{{ post.url }}">Read more...</a><br><br>
      </li>
    {% endfor %}

  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>


