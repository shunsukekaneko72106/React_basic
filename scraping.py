import unittest
from selenium import webdriver
from time import sleep
from selenium.webdriver.support.select import Select
import datetime

browser = webdriver.Chrome()
url = 'https://mobile-o-hara.jp/top'
browser.get(url)

sleep(1)
"""場所の指定"""
elem_username = browser.find_element_by_id('account_no')
"""登録番号"""
elem_username.send_keys('番号')


"""場所の指定"""
elem_password = browser.find_element_by_id('password')
"""パスワード"""
elem_password.send_keys('パスワード')
"""ボタンをクリック"""
elem_btn = browser.find_element_by_class_name('btn_login')
elem_btn.click()

sleep(1)
"""予約ページに飛ぶ"""
browser.get('https://mobile-o-hara.jp/reserveregist')
selector = 'regist_school_id'
element = browser.find_element_by_id(selector)
"""option要素のvalue属性値で選択する"""
Select(element).select_by_value('1')


sleep(1)
"""日付"""
element_day = browser.find_element_by_id('regist_reserve_date')
today_res = datetime.date.today()
print(datetime.date.today())
Select(element_day).select_by_value(today_res)




"""教室"""
selector = 'regist_room_id'
element = browser.find_element_by_id(selector)

"""option要素のvalue属性値で選択する"""
Select(element).select_by_value('58')




"""チェックボックス"""
elem_check_btn = browser.find_element_by_id('regist_timetable_id_study_879')
elem_check_btn.click()
sleep(1)
"""確認ボタン"""
elem_kakunin_btn = browser.find_element_by_class_name('btn')
elem_kakunin_btn.click()











# elem_regist_school_id = browser.find_element_by_id('regist_school_id')
# elem_regist_school_id.select_by_value('regist_school_id')





# class MyTestCase(unittest.TestCase):
#     def test_something(self):
#         self.assertEqual(True, False)
#
#
# if __name__ == '__main__':
#     unittest.main()
