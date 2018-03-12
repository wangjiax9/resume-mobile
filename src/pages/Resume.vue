<template>
    <section class="main">
        <section class="bg"></section>
        <canvas class="cvs-bg" id="cvsBg"></canvas>
        <section class="container">
            <section class="s s0">
                <div class="p-self animated chang-bg" id="myPortrait">
                    <svg  id="linesvg">
                        <g>
                            <text class="animated svg-dash" x="50" y="100" textLength="300">校园年爱奥日</text>
                        </g>
                    </svg>
                </div>
            </section>
            <section class="s s1">
				<ul class="p-base" id="baseInfo">
					<li>
						<dl class="animated" data-animation="fadeIn-left" style="opacity: 0;">
							<dt><i class="icon-user-md"></i>性别：</dt>
							<dd>♂ 男</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-right" data-delay="0.2s" style="opacity: 0;">
							<dt><i class="icon-home"></i>现居地：</dt>
							<dd>北京</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-left" data-delay="0.4s" style="opacity: 0;">
							<dt><i class="icon-calendar"></i>出生：</dt>
							<dd>19870417</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-right" data-delay="0.6s" style="opacity: 0;">
							<dt><i class="icon-globe"></i>籍贯：</dt>
							<dd>贵州</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-left" data-delay="0.8s" style="opacity: 0;">
							<dt><i class="icon-building"></i>毕业学校：</dt>
							<dd>贵州大学</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-right" data-delay="1s" style="opacity: 0;">
							<dt><i class="icon-wrench"></i>专业：</dt>
							<dd>计算机科学与技术</dd> 
						</dl>
					</li>
					<li>
						<dl class="animated" data-animation="fadeIn-left" data-delay="1.2s" style="opacity: 0;">
							<dt><i class="icon-envelope"></i>E-mail：</dt>
							<dd>wangjialong945@foxmail.com</dd> 
						</dl>
					</li>
				</ul>
			</section>
        </section>
    </section>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        var checkCount = 0
        var scrollSize = 500
        $(function() {
            $(window).scroll(function(e) {
                var sTop = $(document.body).scrollTop() || $('html').scrollTop()
                if(sTop > scrollSize * checkCount) {
                    checkAnimation(sTop)
                }
            })
        })
        function checkAnimation(sTop) {
            checkCount ++
            $('[data-animation]').each(function() {
                var h = $(window).height()
                var ot = $(this).offset().top
                if(ot < h + sTop) {
                    if($(this).data('delay') !== undefined) {
                        $(this).css('animation-delay', $(this).data('delay'))
                    }
                    $(this).addClass($(this).data('animation'))
                }
            })
            $('[data-delay]').each(function() {
                var delay = $(this).data('delay')
                $(this).css('animation-delay', delay)
            })
        }
    }
}
</script>
<style lang="scss" >
@import 'src/pages/resume.scss';
</style>
