export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8 text-center text-sm text-gray-500">
      <p>
        <span className="copyright">
          &copy; 2020-{currentYear} 像素幻化(长春)网络科技有限公司&ensp;|&ensp;
          <a
            href="//beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            吉ICP备2021006336号
          </a>
        </span>
      </p>
      <p className="mt-2">本网站内容受法律保护，任何未经授权的使用或转载将依法追究责任。</p>
    </footer>
  )
}

